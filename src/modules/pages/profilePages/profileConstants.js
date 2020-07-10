import orderBlackIcon from "Icons/orders-icon-black.svg";
import helpCenterBlackIcon from "Icons/help-center-icon-black.svg";
import wishlistBlackIcon from "Icons/wishlist-icon-black.svg";
import addressBlackIcon from "Icons/address-icon-black.svg";
import profileBlackIcon from "Icons/profile-icon-black.svg";
import settingsBlackIcon from "Icons/settings-icon-black.svg";
import overviewBlackIcon from "Icons/overview-icon-black.svg";

import orderWhiteIcon from "Icons/orders-icon-white.svg";
import helpCenterWhiteIcon from "Icons/help-center-icon-white.svg";
import wishlistWhiteIcon from "Icons/wishlist-icon-white.svg";
import addressWhiteIcon from "Icons/address-icon-white.svg";
import profileWhiteIcon from "Icons/profile-icon-white.svg";
import settingsWhiteIcon from "Icons/settings-icon-white.svg";
import overviewWhiteIcon from "Icons/overview-icon-white.svg";

export const profileListItem = [
  {
    whiteImage: overviewWhiteIcon,
    blackImage: overviewBlackIcon,
    en: {
      title: "Overview",
      description: "See everyting at a glance",
    },
    ar: {
      title: "نظرة عامة",
      description: "انظر كل شيء في لمحة",
    },
    slug: "overview",
  },
  {
    blackImage: orderBlackIcon,
    whiteImage: orderWhiteIcon,
    en: {
      title: "Orders",
      description: "Check your order status",
    },
    ar: {
      title: "الطلب #٪ s",
      description: "تحقق من حالة طلبك",
    },
    slug: "orders",
  },
  {
    blackImage: helpCenterBlackIcon,
    whiteImage: helpCenterWhiteIcon,
    en: {
      title: "Help Center",
      description: "Help regarding your recent purchases",
    },
    ar: {
      title: "مركز المساعدة",
      description: "مساعدة بخصوص مشترياتك الأخيرة",
    },
    slug: "help-center",
  },
  {
    blackImage: wishlistBlackIcon,
    whiteImage: wishlistWhiteIcon,
    en: {
      title: "Wishlist",
      description: "Your most loved styles",
    },
    ar: {
      title: "قائمة الرغبات",
      description: "الأنماط المفضلة لديك",
    },
    slug: "wishlist",
  },
  {
    blackImage: addressBlackIcon,
    whiteImage: addressWhiteIcon,
    slug: "address",
    en: {
      title: "Address",
      description: "Save addresses for hassle free checkout",
    },
    ar: {
      title: "عنوان",
      description: "حفظ العناوين للخروج خالية من المتاعب",
    },
  },
  {
    blackImage: profileBlackIcon,
    whiteImage: profileWhiteIcon,
    slug: "profile",
    en: {
      title: "Profile",
      description: "Change your personal details and password",
    },
    ar: {
      title: "الملف الشخصي",
      description: "قم بتغيير التفاصيل الشخصية وكلمة المرور الخاصة بك",
    },
  },
  {
    blackImage: settingsBlackIcon,
    whiteImage: settingsWhiteIcon,
    slug: "settings",
    en: {
      title: "Settings",
      description: "Manage notifications & other settings",
    },
    ar: {
      title: "الإعدادات",
      description: "إدارة الإخطارات والإعدادات الأخرى",
    },
  },
  // {
  //   blackImage: logoutBlackIcon,
  //   en: {
  //     title: "Logout",
  //     slug: "logout",
  //   },
  //   description: "Logout from the application",
  // },
];
