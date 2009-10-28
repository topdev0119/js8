window.Underscore={VERSION:"0.1.1",PREVIOUS_UNDERSCORE:window._,each:function(c,f,a){var g=0;try{if(c.forEach){c.forEach(f,a)}else{if(c.length){for(var d=0;d<c.length;d++){f.call(a,c[d],d)}}else{if(c.each){c.each(function(e){f.call(a,e,g++)})}else{var d=0;for(var k in c){var j=c[k],b=[k,j];b.key=k;b.value=j;f.call(a,b,d++)}}}}}catch(h){if(h!="__break__"){throw h}}return c},map:function(d,c,b){if(d&&d.map){return d.map(c,b)}var a=[];_.each(d,function(f,e){a.push(c.call(b,f,e))});return a},inject:function(d,a,c,b){_.each(d,function(f,e){a=c.call(b,a,f,e)});return a},detect:function(d,c,b){var a;_.each(d,function(f,e){if(c.call(b,f,e)){a=f;throw"__break__"}});return a},select:function(d,c,b){if(d.filter){return d.filter(c,b)}var a=[];_.each(d,function(f,e){if(c.call(b,f,e)){a.push(f)}});return a},reject:function(d,c,b){var a=[];_.each(d,function(f,e){if(!c.call(b,f,e)){a.push(f)}});return a},all:function(d,c,b){c=c||function(e){return e};if(d.every){return d.every(c,b)}var a=true;_.each(d,function(f,e){a=a&&!!c.call(b,f,e);if(!a){throw"__break__"}});return a},any:function(d,c,b){c=c||function(e){return e};if(d.some){return d.some(c,b)}var a=false;_.each(d,function(f,e){if(a=!!c.call(b,f,e)){throw"__break__"}});return a},include:function(c,b){if(_.isArray(c)){return _.indexOf(c,b)!=-1}var a=false;_.each(c,function(d){if(d.value===b){a=true;throw"__break__"}});return a},invoke:function(b,c){var a=_.toArray(arguments).slice(2);return _.map(b,function(d){return(c?d[c]:d).apply(d,a)})},pluck:function(c,b){var a=[];_.each(c,function(d){a.push(d[b])});return a},max:function(d,c,b){if(!c&&_.isArray(d)){return Math.max.apply(Math,d)}var a;_.each(d,function(g,e){var f=c?c.call(b,g,e):g;if(a==null||f>=a.computed){a={value:g,computed:f}}});return a.value},min:function(d,c,b){if(!c&&_.isArray(d)){return Math.min.apply(Math,d)}var a;_.each(d,function(g,e){var f=c?c.call(b,g,e):g;if(a==null||f<a.computed){a={value:g,computed:f}}});return a.value},sortBy:function(c,b,a){return _.pluck(_.map(c,function(e,d){return{value:e,criteria:b.call(a,e,d)}}).sort(function(g,f){var e=g.criteria,d=f.criteria;return e<d?-1:e>d?1:0}),"value")},sortedIndex:function(f,e,c){c=c||function(g){return g};var a=0,d=f.length;while(a<d){var b=(a+d)>>1;c(f[b])<c(e)?a=b+1:d=b}return a},toArray:function(a){if(!a){return[]}if(_.isArray(a)){return a}return _.map(a,function(b){return b})},size:function(a){return _.toArray(a).length},first:function(a){return a[0]},last:function(a){return a[a.length-1]},compact:function(a){return _.select(a,function(b){return !!b})},flatten:function(a){return _.inject(a,[],function(b,c){if(_.isArray(c)){return b.concat(_.flatten(c))}b.push(c);return b})},without:function(b){var a=b.slice.call(arguments,0);return _.select(b,function(c){return !_.include(a,c)})},uniq:function(b,a){return _.inject(b,[],function(c,e,d){if(0==d||(a?_.last(c)!=e:!_.include(c,e))){c.push(e)}return c})},intersect:function(b){var a=_.toArray(arguments).slice(1);return _.select(_.uniq(b),function(c){return _.all(a,function(d){return _.indexOf(d,c)>=0})})},zip:function(){var a=_.toArray(arguments);var d=_.max(_.pluck(a,"length"));var c=new Array(d);for(var b=0;b<d;b++){c[b]=_.pluck(a,String(b))}return c},indexOf:function(c,b){if(c.indexOf){return c.indexOf(b)}var a=c.length;for(i=0;i<a;i++){if(c[i]===b){return i}}return -1},bind:function(c,b){if(!b){return c}var a=_.toArray(arguments).slice(2);return function(){var d=a.concat(_.toArray(arguments));return c.apply(b,d)}},bindAll:function(){var a=_.toArray(arguments);var b=a.pop();_.each(a,function(c){b[c]=_.bind(b[c],b)})},delay:function(b,c){var a=_.toArray(arguments).slice(2);return window.setTimeout(function(){return b.apply(b,a)},c)},defer:function(a){return _.delay.apply(_,[a,1].concat(_.toArray(arguments).slice(1)))},wrap:function(a,b){return function(){var c=[a].concat(_.toArray(arguments));return b.apply(b,c)}},keys:function(a){return _.pluck(a,"key")},values:function(a){return _.pluck(a,"value")},extend:function(a,c){for(var b in c){a[b]=c[b]}return a},clone:function(a){return _.extend({},a)},isEqual:function(d,c){if(d===c){return true}var g=typeof(d),j=typeof(c);if(g!=j){return false}if(d==c){return true}if(d.isEqual){return d.isEqual(c)}if(g!=="object"){return false}var e=_.keys(d),h=_.keys(c);if(e.length!=h.length){return false}for(var f in d){if(!_.isEqual(d[f],c[f])){return false}}return true},isElement:function(a){return !!(a&&a.nodeType==1)},isArray:function(a){return Object.prototype.toString.call(a)=="[object Array]"},isFunction:function(a){return typeof a=="function"},isUndefined:function(a){return typeof a=="undefined"},noConflict:function(){window._=Underscore.PREVIOUS_UNDERSCORE;return this},uniqueId:function(a){var b=this._idCounter=(this._idCounter||0)+1;return a?a+b:b},template:function(c,b){var a=new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('"+c.replace(/[\r\t\n]/g," ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g,"$1\r").replace(/\t=(.*?)%>/g,"',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'")+"');}return p.join('');");return b?a(b):a}};window._=Underscore;