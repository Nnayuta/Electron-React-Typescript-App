import React, { useContext, useEffect, useState } from "react";
import * as S from "./styles";

import { Sidebar } from "@components/Sidebar";
import { StoreSelector } from "@components/StoreSelector";

import { Admin } from "@/pages/Admin";
import { Automation } from "@/pages/Automation";
import { Config } from "@/pages/Config";
import { ManualConnection } from "@/pages/ManualConnection";
import { StoreInfo } from "@/pages/StoreInfo";
import { Voips } from "@/pages/Voips";

import { AuthContext } from "@contexts/AuthContext";
import { ipcRenderer } from "electron";
import useSWR from "swr";

export const Layout: React.FC = () => {
  const { data: config, isLoading } = useSWR(["config:get"]);
  const [currentPage, setCurrentPage] = useState<string>("Automation");
  const { user } = useContext(AuthContext);

  useEffect(() => {
    (async () => {
      if (config?.backToThePageAfterClosing) {
        if (config.currentPage === "Admin" && !user?.isAdmin) {
          setCurrentPage("Automation");

          await ipcRenderer.invoke("config:set", {
            key: "currentPage",
            value: "Automation",
          });
          return;
        }

        setCurrentPage(config.currentPage);
      }
    })();
  }, [isLoading]);

  const onChangePage = async (page: string) => {
    if (!page) return;
    setCurrentPage(page);

    await ipcRenderer.invoke("config:set", {
      key: "currentPage",
      value: page,
    });
  };

  return (
    <S.Container>
      <StoreSelector />
      <S.WrapperPage>
        <Sidebar
          currentPage={currentPage}
          onChangePage={onChangePage}
          key="SIDEBAR"
        />
        <S.Content
          key={currentPage}
          className={"animate__animated animate__fadeIn"}
        >
          {currentPage == "Automation" && <Automation />}
          {currentPage == "ManualConnection" && <ManualConnection />}
          {currentPage == "StoreInfo" && <StoreInfo />}
          {currentPage == "Voips" && <Voips />}
          {currentPage == "Config" && <Config />}
          {currentPage == "Admin" && <Admin />}
        </S.Content>
      </S.WrapperPage>
    </S.Container>
  );
};
