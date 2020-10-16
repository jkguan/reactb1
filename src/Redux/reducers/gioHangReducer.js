const initialState = {
  //copy het tu state cua BTGioHang
  sanPhamChiTiet: {
    maSP: "1",
    tenSP: "",
    hinhAnh: "./img/meizuphone.jpg",
    manHinh: `AMOLED, FHD+ 2232 x 1080 pixels`,
    heDH: "Android 9.0 (Pie)",
    cameraTruoc: "20MP",
    cameraSau: "12MP",
    ram: "4GB",
    rom: "6GB",
  },
  danhSachGioHang: [],
  //copy het tu mang danhSachSanPham cua BTGioHang
  danhSachSanPham: [
    {
      maSP: "1",
      tenSP: "MZ",
      hinhAnh: "./img/meizuphone.jpg",
      manHinh: `AMOLED, FHD+ 2232 x 1080 pixels`,
      heDH: "Android 9.0 (Pie)",
      cameraTruoc: "20MP",
      cameraSau: "12MP",
      ram: "4GB",
      rom: "6GB",
      giaBan: 4999999,
    },
    {
      maSP: "2",
      tenSP: "VS",
      hinhAnh: "./img/vsphone.jpg",
      manHinh: `AMOLED, FHD+ 2232 x 1080 pixels`,
      heDH: "Android 10 (Pie)",
      cameraTruoc: "20MP",
      cameraSau: "12MP",
      ram: "5GB",
      rom: "7GB",
      giaBan: 5888888,
    },
    {
      maSP: "3",
      tenSP: "Apple",
      hinhAnh: "./img/applephone.jpg",
      manHinh: `AMOLED, FHD+ 2232 x 1080 pixels`,
      heDH: "iOS",
      cameraTruoc: "20MP",
      cameraSau: "12MP",
      ram: "6GB",
      rom: "8GB",
      giaBan: 6333333,
    },
  ],
};
const gioHangReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case "DETAIL_PRODUCT": {
      state.sanPhamChiTiet = actions.payload;
      //no chi so sanh vung nho
      return { ...state };
    }

    default:
      break;
  }
  return state;
};

export default gioHangReducer;
