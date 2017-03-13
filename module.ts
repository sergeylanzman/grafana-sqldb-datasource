import SqlDatasource from './dist/datasource';
import {SqlQueryCtrl} from './dist/query_ctrl';

class SqlConfigCtrl {
  static templateUrl = 'dist/partials/config.html';
}

class SqlQueryOptionsCtrl {
  static templateUrl = 'dist/partials/query.options.html';
}

class SqlAnnotationsQueryCtrl {
  static templateUrl = 'dist/partials/annotations.editor.html';
}

export {
  SqlDatasource as Datasource,
  SqlQueryCtrl as QueryCtrl,
  SqlConfigCtrl as ConfigCtrl,
  SqlQueryOptionsCtrl as QueryOptionsCtrl,
  SqlAnnotationsQueryCtrl as AnnotationsQueryCtrl,
};


