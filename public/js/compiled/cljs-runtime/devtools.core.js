goog.provide('devtools.core');
devtools.core.is_feature_available_QMARK_ = (function devtools$core$is_feature_available_QMARK_(feature){
var G__15757 = feature;
var G__15757__$1 = (((G__15757 instanceof cljs.core.Keyword))?G__15757.fqn:null);
switch (G__15757__$1) {
case "formatters":
return devtools.formatters.available_QMARK_.call(null);

break;
case "hints":
return devtools.hints.available_QMARK_.call(null);

break;
case "async":
return devtools.async.available_QMARK_.call(null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15757__$1)].join('')));

}
});
devtools.core.available_QMARK_ = (function devtools$core$available_QMARK_(var_args){
var G__15771 = arguments.length;
switch (G__15771) {
case 0:
return devtools.core.available_QMARK_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return devtools.core.available_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(devtools.core.available_QMARK_.cljs$core$IFn$_invoke$arity$0 = (function (){
return devtools.core.available_QMARK_.cljs$core$IFn$_invoke$arity$1(devtools.prefs.pref(new cljs.core.Keyword(null,"features-to-install","features-to-install",102899261)));
}));

(devtools.core.available_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (features_desc){
var features = devtools.util.resolve_features_BANG_(features_desc,cljs.core.deref(devtools.defaults.feature_groups));
if(cljs.core.empty_QMARK_(features)){
return false;
} else {
return cljs.core.every_QMARK_(devtools.core.is_feature_available_QMARK_,features);
}
}));

(devtools.core.available_QMARK_.cljs$lang$maxFixedArity = 1);

devtools.core.is_feature_installed_QMARK_ = (function devtools$core$is_feature_installed_QMARK_(feature){
var G__15776 = feature;
var G__15776__$1 = (((G__15776 instanceof cljs.core.Keyword))?G__15776.fqn:null);
switch (G__15776__$1) {
case "formatters":
return devtools.formatters.installed_QMARK_();

break;
case "hints":
return devtools.hints.installed_QMARK_();

break;
case "async":
return devtools.async.installed_QMARK_();

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15776__$1)].join('')));

}
});
devtools.core.installed_QMARK_ = (function devtools$core$installed_QMARK_(var_args){
var G__15778 = arguments.length;
switch (G__15778) {
case 0:
return devtools.core.installed_QMARK_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return devtools.core.installed_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(devtools.core.installed_QMARK_.cljs$core$IFn$_invoke$arity$0 = (function (){
return devtools.core.installed_QMARK_.cljs$core$IFn$_invoke$arity$1(devtools.prefs.pref(new cljs.core.Keyword(null,"features-to-install","features-to-install",102899261)));
}));

(devtools.core.installed_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (features_desc){
var features = devtools.util.resolve_features_BANG_(features_desc,cljs.core.deref(devtools.defaults.feature_groups));
if(cljs.core.empty_QMARK_(features)){
return false;
} else {
return cljs.core.every_QMARK_(devtools.core.is_feature_installed_QMARK_,features);
}
}));

(devtools.core.installed_QMARK_.cljs$lang$maxFixedArity = 1);

devtools.core.install_BANG_ = (function devtools$core$install_BANG_(var_args){
var G__15786 = arguments.length;
switch (G__15786) {
case 0:
return devtools.core.install_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return devtools.core.install_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(devtools.core.install_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return devtools.core.install_BANG_.cljs$core$IFn$_invoke$arity$1(devtools.prefs.pref(new cljs.core.Keyword(null,"features-to-install","features-to-install",102899261)));
}));

(devtools.core.install_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (features_desc){
if(cljs.core.truth_(devtools.util.under_advanced_build_QMARK_())){
return devtools.util.display_advanced_build_warning_if_needed_BANG_();
} else {
var features = devtools.util.resolve_features_BANG_(features_desc,cljs.core.deref(devtools.defaults.feature_groups));
devtools.util.display_banner_if_needed_BANG_(features,cljs.core.deref(devtools.defaults.feature_groups));

devtools.util.print_config_overrides_if_requested_BANG_("config overrides prior install:\n");

devtools.util.install_feature_BANG_(new cljs.core.Keyword(null,"formatters","formatters",-1875637118),features,devtools.core.is_feature_available_QMARK_,devtools.formatters.install_BANG_);

devtools.util.install_feature_BANG_(new cljs.core.Keyword(null,"hints","hints",-991113151),features,devtools.core.is_feature_available_QMARK_,devtools.hints.install_BANG_);

return devtools.util.install_feature_BANG_(new cljs.core.Keyword(null,"async","async",1050769601),features,devtools.core.is_feature_available_QMARK_,devtools.async.install_BANG_);
}
}));

(devtools.core.install_BANG_.cljs$lang$maxFixedArity = 1);

devtools.core.uninstall_BANG_ = (function devtools$core$uninstall_BANG_(){
devtools.formatters.uninstall_BANG_();

devtools.hints.uninstall_BANG_();

return devtools.async.uninstall_BANG_();
});
devtools.core.set_prefs_BANG_ = (function devtools$core$set_prefs_BANG_(new_prefs){
return devtools.prefs.set_prefs_BANG_(new_prefs);
});
devtools.core.get_prefs = (function devtools$core$get_prefs(){
return devtools.prefs.get_prefs();
});
devtools.core.set_pref_BANG_ = (function devtools$core$set_pref_BANG_(pref,val){
return devtools.prefs.set_pref_BANG_(pref,val);
});
devtools.core.enable_BANG_ = (function devtools$core$enable_BANG_(){
return devtools.context.get_console.call(null).warn(["devtools.core/enable! was removed ","and has no effect in ",devtools.util.make_lib_info.call(null)," ","=> remove the call"].join(''));
});
devtools.core.disable_BANG_ = (function devtools$core$disable_BANG_(){
return devtools.context.get_console.call(null).warn(["devtools.core/disable! was removed ","and has no effect in ",devtools.util.make_lib_info.call(null)," ","=> remove the call"].join(''));
});
devtools.core.set_single_feature_BANG_ = (function devtools$core$set_single_feature_BANG_(_feature,_val){
return devtools.context.get_console.call(null).warn(["devtools.core/set-single-feature! was removed ","and has no effect in ",devtools.util.make_lib_info.call(null)," ","=> use (devtools.core/install! features) to install custom features"].join(''));
});
devtools.core.enable_single_feature_BANG_ = (function devtools$core$enable_single_feature_BANG_(_feature){
return devtools.context.get_console.call(null).warn(["devtools.core/enable-single-feature! was removed ","and has no effect in ",devtools.util.make_lib_info.call(null)," ","=> use (devtools.core/install! features) to install custom features"].join(''));
});
devtools.core.disable_single_feature_BANG_ = (function devtools$core$disable_single_feature_BANG_(_feature){
return devtools.context.get_console.call(null).warn(["devtools.core/disable-single-feature! was removed ","and has no effect in ",devtools.util.make_lib_info.call(null)," ","=> use (devtools.core/install! features) to install custom features"].join(''));
});
devtools.core.enable_feature_BANG_ = (function devtools$core$enable_feature_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___15816 = arguments.length;
var i__5770__auto___15823 = (0);
while(true){
if((i__5770__auto___15823 < len__5769__auto___15816)){
args__5775__auto__.push((arguments[i__5770__auto___15823]));

var G__15824 = (i__5770__auto___15823 + (1));
i__5770__auto___15823 = G__15824;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return devtools.core.enable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(devtools.core.enable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_features){
return devtools.context.get_console.call(null).warn(["devtools.core/enable-feature! was removed ","and has no effect in ",devtools.util.make_lib_info.call(null)," ","=> use (devtools.core/install! features) to install custom features"].join(''));
}));

(devtools.core.enable_feature_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.core.enable_feature_BANG_.cljs$lang$applyTo = (function (seq15792){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15792));
}));

devtools.core.disable_feature_BANG_ = (function devtools$core$disable_feature_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___15825 = arguments.length;
var i__5770__auto___15826 = (0);
while(true){
if((i__5770__auto___15826 < len__5769__auto___15825)){
args__5775__auto__.push((arguments[i__5770__auto___15826]));

var G__15827 = (i__5770__auto___15826 + (1));
i__5770__auto___15826 = G__15827;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return devtools.core.disable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(devtools.core.disable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_features){
return devtools.context.get_console.call(null).warn(["devtools.core/disable-feature! was removed ","and has no effect in ",devtools.util.make_lib_info.call(null)," ","=> use (devtools.core/install! features) to install custom features"].join(''));
}));

(devtools.core.disable_feature_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.core.disable_feature_BANG_.cljs$lang$applyTo = (function (seq15793){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15793));
}));

devtools.core.single_feature_available_QMARK_ = (function devtools$core$single_feature_available_QMARK_(_feature){
return devtools.context.get_console.call(null).warn(["devtools.core/single-feature-available? was removed ","and has no effect in ",devtools.util.make_lib_info.call(null)," ","=> use devtools.core/is-feature-available? instead"].join(''));
});
devtools.core.feature_available_QMARK_ = (function devtools$core$feature_available_QMARK_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___15828 = arguments.length;
var i__5770__auto___15829 = (0);
while(true){
if((i__5770__auto___15829 < len__5769__auto___15828)){
args__5775__auto__.push((arguments[i__5770__auto___15829]));

var G__15830 = (i__5770__auto___15829 + (1));
i__5770__auto___15829 = G__15830;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return devtools.core.feature_available_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(devtools.core.feature_available_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (_features){
return devtools.context.get_console.call(null).warn(["devtools.core/feature-available? was removed ","and has no effect in ",devtools.util.make_lib_info.call(null)," ","=> use devtools.core/is-feature-available? instead"].join(''));
}));

(devtools.core.feature_available_QMARK_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.core.feature_available_QMARK_.cljs$lang$applyTo = (function (seq15798){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15798));
}));


//# sourceMappingURL=devtools.core.js.map
