基于yeoman的自动化代码生成工具包，集成了kkapp开发中的基本依赖库

###step1
```bash
npm link
```
###step2
```bash
yo kkapp
```
###step3
```bash
gulp
```
生成目录结构文件
```
src
   ---html
      ---index.html
   ---images
   ---js
      ---controllers
         ---indexController.js
         ---main_controller.js
      ---directives
         ---banner.js
         ---imageview.js
         ---onRepeatDone.js
         ---showOnLoad.js
      ---services
         ---appServices.js
         ---errorServices.js
         ---platformServices.js
         ---toastServices.js
         ---tokenInterceptor.js
      ---app.js
      ---config.js
      ---polifill.js
   ---less
      ---app.less
      ---common.less
      ---navbar.less
      ---responsive.less
      ---variables.less
   ---templates
      ---home.html
      ---sidebar.html
config.js
gulpfile.js
package.json
```
集成的依赖库
ng-flow```repository:https://github.com/dribehance/ng-flow.git```
angular-timer```repository:https://github.com/dribehance/angular-timer.git```
d3,pie-chart```repository:https://github.com/dribehance/pie-chart.git ```
angular-localstorage```repository:https://github.com/dribehance/angular-local-storage.git ```
owl.carousel```repository:https://github.com/dribehance/OwlCarousel.git ```
china-identity-card```repository:https://github.com/dribehance/china-identity-card.git```
date-polifill```repository:https://github.com/dribehance/date-polyfill.git ```

