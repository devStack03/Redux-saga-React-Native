import { createAction } from "@reduxjs/toolkit";



export const getUserListApi = createAction('getUserListApi');
export const getAlbumListApi = createAction('getAlbumListApi');
export const getPhotoListApi = createAction('getPhotoListApi');
export const clearStore = createAction('clearStore')

