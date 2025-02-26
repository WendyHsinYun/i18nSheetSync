const ja = {
  common: {
    action: '操作',
    add: '追加',
    addSuccess: 'カートに追加しました',
    accept: '同意する',
    remove: '削除',
    checkout: 'チェックアウト',
  },
  request: {
    common: {
      errorMsg: {
        default: '操作に失敗しました。もう一度試すか、サポートに連絡してください。',
        imageInvalid: '有効な商品画像をアップロードしてください。',
        stockUnavailable: 'この商品は現在在庫切れです。',
      },
    },
  },
  page: {
    login: {
      common: {
        loginOrRegister: 'ログイン / 登録',
        userNamePlaceholder: 'ユーザー名を入力してください',
        emailPlaceholder: 'メールアドレスを入力してください',
      },
    },
    product: {
      details: {
        addToCart: 'カートに追加',
        buyNow: '今すぐ購入',
        description: '商品説明',
        reviews: 'カスタマーレビュー',
      },
      filter: {
        category: 'カテゴリー',
        priceRange: '価格範囲',
        brand: 'ブランド',
        rating: '評価',
      },
    },
    cart: {
      title: 'ショッピングカート',
      emptyMessage: 'カートには商品がありません。',
      proceedToCheckout: 'チェックアウトに進む',
    },
    checkout: {
      title: 'チェックアウト',
      billingDetails: '請求情報',
      paymentMethod: '支払い方法',
      confirmPurchase: '購入を確定',
    },
    order: {
      history: '注文履歴',
      orderNumber: '注文番号',
      status: 'ステータス',
      total: '合計',
    },
  },
};

export { ja };
