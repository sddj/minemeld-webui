/// <reference path="../../.tmp/typings/tsd.d.ts" />

import { config } from './index.config';
import { routerConfig } from './index.route';
import { minemeldInit } from './index.init';
import { DashboardController } from './dashboard/dashboard.controller';
import { NodesController } from './nodes/nodes.controller';
import { NodeDetailController } from './nodedetail/nodedetail.controller';
import { NodeDetailStatsController } from './nodedetail/nodedetail.stats.controller';
import { NodeDetailInfoController } from './nodedetail/nodedetail.info.controller';
import { NodeDetailGraphController } from './nodedetail/nodedetail.graph.controller';
import { PrototypedetailController } from './prototypedetail/prototypedetail.controller';
import { appNavbar } from '../app/components/navbar/navbar.directive';
import { LoginController } from './login/login.controller';
import { MinemeldStatus } from './services/status';
import { MinemeldMetrics } from './services/metrics';
import { MinemeldAuth } from './services/auth';
import { MinemeldPrototype } from './services/prototype';
import { NodeDetailResolver } from './services/nodedetailresolver';
import { megaNumber } from './filters/megaNumber';
import { minemeldOptions } from '../app/components/options/options.directive';
import { nodeConfig } from '../app/components/nodeconfig/nodeconfig.directive';

declare var malarkey: any;
declare var moment: moment.MomentStatic;

module minemeldWebui {
  'use strict';

  angular.module('minemeldWebui', [
    'ngAnimate',
    'ngCookies',
    'ngSanitize',
    'ngMessages',
    'ngAria',
    'ngResource',
    'ui.router',
    'ui.bootstrap',
    'toastr',
    'angular-loading-bar',
    'datatables',
    'datatables.bootstrap',
    'easypiechart',
    'nvd3',
    'mmSankey'
  ])
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .directive('minemeldOptions', minemeldOptions)
  .directive('nodeConfig', nodeConfig)
  .controller('DashboardController', DashboardController)
  .controller('NodesController', NodesController)
  .controller('NodeDetailController', NodeDetailController)
  .controller('NodeDetailStatsController', NodeDetailStatsController)
  .controller('NodeDetailInfoController', NodeDetailInfoController)
  .controller('NodeDetailGraphController', NodeDetailGraphController)
  .controller('LoginController', LoginController)
  .controller('PrototypedetailController', PrototypedetailController)
  .directive('appNavbar', appNavbar)
  .service('MinemeldStatus', MinemeldStatus)
  .service('MinemeldMetrics', MinemeldMetrics)
  .service('NodeDetailResolver', NodeDetailResolver)
  .service('MinemeldAuth', MinemeldAuth)
  .service('MinemeldPrototype', MinemeldPrototype)
  .filter('megaNumber', megaNumber)
  .run(minemeldInit)
  ;
}
