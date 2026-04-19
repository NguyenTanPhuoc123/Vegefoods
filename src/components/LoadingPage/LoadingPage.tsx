import {
  forwardRef,
  useImperativeHandle,
  useMemo,
  useState,
  type Ref,
} from "react";
import "./LoadingPage.css";
import type { LoadingPageRef } from "./type";
import { Spinner } from "react-bootstrap";

const LoadingPage = forwardRef((props: any, ref: Ref<LoadingPageRef>) => {
  const [isShowLoading, setIsShowLoading] = useState<boolean>(false);
  console.log("Loading");

  useImperativeHandle(ref, () => ({
    isLoading() {
      return isShowLoading;
    },
    showLoading() {
      setIsShowLoading(true);
    },
    hideLoading() {
      setIsShowLoading(false);
    },
  }));
  const renderLoading = useMemo(() => {
    return !isShowLoading ? (
      <></>
    ) : (
      <div className="loading-overlay">
        <Spinner animation="border" variant="primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }, [isShowLoading]);
  return renderLoading;
});

export default LoadingPage;
