(function () {

  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var PullToRefresh = global.PullToRefresh || require('pulltorefreshjs');
  var DEFAULT_OPTIONS = {
    iconRefreshing: '<i class="webkit-sassui-spinkit" style="width:16px; height: 16px;" />',
    instructionsPullToRefresh: '下拉刷新',
    instructionsReleaseToRefresh: '释放更新',
    instructionsRefreshing: '数据加载中',
    distReload: 64,
    getStyles: function () {
      return '.ptr--ptr { border-bottom:0.55px solid #eee; pointer-events: none; font-size: 0.85em; font-weight: bold; top: 0; height: 0; transition: height 0.3s, min-height 0.3s; text-align: center; width: 100%; overflow: hidden; display: flex; align-items: flex-end; align-content: stretch; } .ptr--box { padding: 10px; flex-basis: 100%; } .ptr--pull { transition: none; } .ptr--text { margin-top: 0.33em; color: rgba(0, 0, 0, 0.3); } .ptr--icon { color: rgba(0, 0, 0, 0.3); transition: transform 0.3s; } .ptr--top { touch-action: pan-x pan-down pinch-zoom; } .ptr--release .ptr--icon { transform: rotate(180deg); }';
    }
  };

  var NxPullToRefresh = nx.declare('nx.PullToRefresh', {
    methods: {
      init: function (inOptions) {
        this.options = nx.mix(DEFAULT_OPTIONS, inOptions);
        this.instance = PullToRefresh.init(this.options);
      },
      destroy: function () {
        this.instance.destroy();
      }
    }
  });


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxPullToRefresh;
  }

}());
