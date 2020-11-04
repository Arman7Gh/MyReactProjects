var role = "anonymous";
if (localStorage.getItem("user")) {
  role = JSON.parse(localStorage.getItem('user')).role;
}


export default {

  items: role === "Admin" ? [
    {
      name: 'داشبورد مدیریت',
      url: '/dashboard',
      icon: 'icon-speedometer',
    },
    {
      name: 'اطلاعات کاربری',
      icon: 'icon-user',
      // url: '/user',           
    },
    {
      name: 'محصولات',
      url: '/base',
      icon: 'icon-briefcase',
      children: [

        {
          name: 'لیست محصولات',
          url: '/products',
          icon: 'icon-puzzle',
        },

      ],
    },
    {
      name: 'دسته بندی محصول',
      url: '/base',
      icon: 'icon-grid',
      children: [
        {
          name: 'لیست گروه ها',
          url: '/categories',
          icon: 'icon-list',
        },
        {
          name: 'گروه جدید',
          url: '/addcategory',
          icon: 'icon-plus',
        },
      ],
    },
    {
      name: 'کاربران',
      // url: '/users',
      icon: 'icon-people',
    },
    {
      name: 'مدیریت فروش',
      // url: '/',
      icon: 'icon-calculator',
      // children: [

      // ],
    },
    {
      name: 'مدیریت خرید',
      // url: '/cart',
      icon: 'icon-basket',
    },

    {
      name: 'اطلاعات پایه',
      url: '/base',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'محصولات',
          url: '/products',
          icon: 'icon-puzzle',
        },

      ],
    },

    {
      name: 'Pages',
      url: '/pages',
      icon: 'icon-star',
      children: [
        {
          name: 'Login',
          url: '/login',
          icon: 'icon-star',
        },
        {
          name: 'Register',
          url: '/register',
          icon: 'icon-star',
        },
        {
          name: 'Error 404',
          url: '/404',
          icon: 'icon-star',
        },
        {
          name: 'Error 500',
          url: '/500',
          icon: 'icon-star',
        },
        {
          name: ' counter tester',
          url: '/counter',
          icon: 'icon-star',
        },
      ],
    },

  ] : [
      {
        name: 'داشبورد مدیریت',
        url: '/dashboard',
        icon: 'icon-speedometer',
        badge: {
          variant: 'info',
          text: 'NEW',
        },
      },
      {
        title: true,
        name: 'اطلاعات پایه',
        wrapper: {    
          element: '', 
          attributes: {}       
        },
        class: ''             
      },
      {
        name: 'اطلاعات کاربری',
        icon: 'icon-user',
        // url: '/user',           
      },
      {
        name: 'مدیریت خرید',
        // url: '/cart',
        icon: 'icon-basket',
      },
    ]
};
