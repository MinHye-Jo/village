import http from "../config/http";

// 목록 조회
export const ntfList = (data) => {
  return http.post("/collection/listSearch", data);
};

// 컬렉션 단건 조회
export const collectionInfo = (data) => {
  return http.post("/collection/collectionInfo", data);
};

// 랜덤 주소 가져오기
export const getAddress = (data) => {
  return http.post("/collection/randomAddress", data);
};

// 세부 정보 조회
export const ntfData = (nftId) => {
  return http.post(`/collection/${nftId}`, {});
};
