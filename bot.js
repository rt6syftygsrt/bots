const  Discord  =  تتطلب ( ' discord.js ' )؛
const  client  =  new  Discord.Client ()؛




العميل . login ( ' NDM4MzcxMjQzODAxMDUxMTQx.DyuL0w.2YKPerRUndolKHXoa2O6NaBvNjY ' )؛


العميل . على ( " جاهز " ، () => {
  وحدة التحكم . log ( ' ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ~~~~~~~~~~~~~~~ ' ) ؛
  وحدة التحكم . log ( ' by safa7 ' )؛
  وحدة التحكم . log ( ' ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ~~~~~~~~~~~~~~~ ' ) ؛
  وحدة التحكم . log ( ` Logged in as * [" $ { client . user . userername } "] servers! [" $ { client . guilds . size } "] ` )؛
  وحدة التحكم . log ( ' ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ~~~~~~~~~~~~~~~ ' ) ؛
  وحدة التحكم . سجل ( " على الانترنت " )
العميل . المستخدم . setStatus ( " dnd " )؛
})؛

// لعب
العميل . على ( " جاهز " ، () => {                           
العميل . المستخدم . setGame ( ` ` ، ' https://www.twitch.tv/tarikrs ' )؛                                                                                                                                                                                                                                                                                                                                                                                                                             العميل . المستخدم . setGame ( ` -help | في 20 خوادم ` ، 'https://www.twitch.tv/v5bz ' )؛
})؛          



         

العميل . في ( ' تثبيت ' ، () => {
فار x =  العميل . القنوات . احصل على ( " 504807381373419541 " ) ؛
إذا (س) س . انضمام () ؛
})؛





const   adminprefix   =   " $ " ؛
const   devs   = [ ' 496597218195800084 ' ، ' 438371243801051141 ' ] ؛
العميل. على ( ' message ' ، message   => {
  var argresult =   message. محتوى. انقسام ( `   ` ). شريحة ( 1 ). انضمام ( '   ' )؛
    اذا ( ! devs. اكتب ( message . author . id )) return ؛
    
إذا كان ( رسالة . محتوى . يبدأ بـ (adminprefix +   ' بلاي ' )) {
  العميل. المستخدم setGame (argresult)؛
    رسالة. قناة. sendMessage ( ` ** $ {argresult} تم تغيير بلاينق البوت إلى ** ` )
آخر 
  إذا كان ( رسالة . محتوى . بدأ بـ (adminprefix +   ' نيم ' )) {
العميل. المستخدم setUsername (argresult). ثم
    رسالة. قناة. sendMessage ( ` ** $ {argresult} **: تم تغيير أسم البوت إلى ` )
رسالة العودة. الرد ( " ** لا يمكن تغيير الاسم يجب عليك الانتظآر لمدة ساعتين. ** " ) ؛
آخر
  إذا كان ( رسالة . content . تبدأ (adminprefix +   ' افتار ' )) {
العميل. المستخدم setAvatar (argresult)؛
  رسالة. قناة. sendMessage ( ` ** $ {argresult} **: تم تغير صورة البوت ` )؛
      آخر     
إذا كان ( رسالة . محتوى . بدأ بـ (adminprefix +   ' ستريم ' )) {
  العميل. المستخدم setGame (argresult ، " https://www.twitch.tv/idk " ) ؛ // wennnn
    رسالة. قناة. sendMessage ( ` ** تم تغيير تويتش البوت إلى $ {argresult} ** ` )
}
})؛

