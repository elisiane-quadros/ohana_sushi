import { Spin } from "antd";
import { useEffect, useState } from "react";

import styles from "./styles.module.css";

const FullScreenLoading = () => {
  const [overFlowStatus, setOverFlowStatus] = useState("hidden");

  useEffect(() => {
    setOverFlowStatus("hidden");

    return () => setOverFlowStatus("auto");
  }, []);

  return (
    <>
      <div
        className={styles.loadingContainer}
        style={{ overflow: `${overFlowStatus}` }}
      />
      <Spin size="large" className={styles.spin} />
    </>
  );
};

export default FullScreenLoading;
