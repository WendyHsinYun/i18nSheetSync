const th = {
  common: {
    action: 'ดำเนินการ',
    add: 'เพิ่ม',
    addSuccess: 'เพิ่มลงในตะกร้าสำเร็จ',
    accept: 'ฉันยอมรับ',
    remove: 'ลบ',
    checkout: 'ชำระเงิน',
  },
  request: {
    common: {
      errorMsg: {
        default: 'การดำเนินการล้มเหลว กรุณาลองใหม่หรือติดต่อฝ่ายสนับสนุน',
        imageInvalid: 'กรุณาอัปโหลดรูปภาพสินค้าที่ถูกต้อง',
        stockUnavailable: 'สินค้านี้หมดสต็อกในขณะนี้',
      },
    },
  },
  page: {
    login: {
      common: {
        loginOrRegister: 'เข้าสู่ระบบ / ลงทะเบียน',
        userNamePlaceholder: 'กรุณากรอกชื่อผู้ใช้',
        emailPlaceholder: 'กรุณากรอกอีเมล',
      },
    },
    product: {
      details: {
        addToCart: 'เพิ่มลงในตะกร้า',
        buyNow: 'ซื้อทันที',
        description: 'รายละเอียดสินค้า',
        reviews: 'รีวิวจากลูกค้า',
      },
      filter: {
        category: 'หมวดหมู่',
        priceRange: 'ช่วงราคา',
        brand: 'แบรนด์',
        rating: 'คะแนน',
      },
    },
    cart: {
      title: 'ตะกร้าสินค้า',
      emptyMessage: 'ตะกร้าของคุณว่างเปล่า',
      proceedToCheckout: 'ดำเนินการชำระเงิน',
    },
    checkout: {
      title: 'ชำระเงิน',
      billingDetails: 'รายละเอียดการเรียกเก็บเงิน',
      paymentMethod: 'วิธีการชำระเงิน',
      confirmPurchase: 'ยืนยันการซื้อ',
    },
    order: {
      history: 'ประวัติการสั่งซื้อ',
      orderNumber: 'หมายเลขคำสั่งซื้อ',
      status: 'สถานะ',
      total: 'รวม',
    },
  },
};

export { th };
