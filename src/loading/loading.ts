import { loadingRef } from "../App";

function showLoading() {
  loadingRef.current && loadingRef.current.showLoading();
}

function hideLoading() {
  loadingRef.current && loadingRef.current.hideLoading();
}

const NavigationActionService = {
  showLoading,
  hideLoading,
};

export default NavigationActionService;
