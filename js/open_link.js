console.log('testing script');
var tabNumber = $(location).attr('href').substr(-5);
switch (tabNumber) {
    case "#tab1":
        $('a[href$="tab1"]').trigger('click');
        break;
    case "#tab2":
        $('a[href$="tab2"]').trigger('click');
        break;
    case "#tab3":
        $('a[href$="tab3"]').trigger('click');
        break;
    case "#tab4":
        $('a[href$="tab4"]').trigger('click');
        break;
    case "#tab5":
        $('a[href$="tab5"]').trigger('click');
        break;
    case "#tab6":
        $('a[href$="tab6"]').trigger('click');
        break;
    case "#tab7":
        $('a[href$="tab7"]').trigger('click');
        break;
}
