import React, { useState } from "react";
// import DeviceList from "./components/DeviceList";
// import { message } from "antd";

export default function HomeContent() {
  const refreshModeOption = ["auto", "5s", "20s", "manual"];
  const [refreshMode, setRefreshMode] = useState<string>(refreshModeOption[3]);
  const [manualRefresh, setManualRefresh] = useState<boolean>(false);
  return (
    <div className="content_box">
      <div className="top_menu">
        <span>Refresh Mode: </span>
        <button
          onClick={() => {
            for (const i in refreshModeOption) {
              if (refreshMode == refreshModeOption[i]) {
                if (Number(i) == refreshModeOption.length - 1) {
                  setRefreshMode(refreshModeOption[0]);
                  break;
                }
                setRefreshMode(refreshModeOption[Number(i) + 1]);
                break;
              }
            }
          }}
          className="btn load_refresh"
        >
          {refreshMode}
        </button>
        {/* {refreshMode == "manual" && (
          <button
            onClick={() => {
              setManualRefresh(!manualRefresh);
              message.success("Manual Refreshed");
            }}
            className="btn load_refresh"
          >
            Refresh
          </button>
        )} */}
      </div>
      {/* <DeviceList refreshMode={refreshMode} manualRefresh={manualRefresh} /> */}
    </div>
  );
}
