/// <reference path="dojo.d.ts"/>

declare module dijit {
	interface Constructor<T> {
		new (props?:any, id?:string):T;
		new (props?:any, element?:HTMLElement):T;
	}
}

declare module 'dijit/registry' {
	import _WidgetBase = require('dijit/_WidgetBase');

	var registry:{
		_hash:{
			[id:string]:_WidgetBase;
		};
		add(widget:_WidgetBase):void;
		byId<T extends _WidgetBase>(id:string):T;
		byId<T>(arg:T):T;
		byNode<T extends _WidgetBase>(node:HTMLElement):T;
		findWidgets<T extends _WidgetBase>(root:HTMLElement, skipNode?:HTMLElement):T[];
		findWidgets(root:HTMLElement, skipNode?:HTMLElement):_WidgetBase[];
		getEnclosingWidget<T extends _WidgetBase>(node:HTMLElement):T;
		getUniqueId(widgetType:string):string;
		remove(id:string):void;
		toArray():_WidgetBase[];
	};
	export = registry;
}

declare module 'dijit/_AttachMixin' {
	interface _AttachMixin {
		_attach(node:Node, type:string, func:Function):dojo.IHandle;
		_attachTemplateNodes(rootNode:HTMLElement):void;
		_beforeFillContent():void;
		_detachTemplateNodes():void;
		_processTemplateNode(baseNode:any, getAttrFunc:Function, attachFunc:Function):boolean;
	}

	var _AttachMixin:dijit.Constructor<_AttachMixin>;
	export = _AttachMixin;
}

declare module 'dijit/_Contained' {
	import _WidgetBase = require('dijit/_WidgetBase');

	interface _Contained {
		getIndexInParent():number;
		getNextSibling():_WidgetBase;
		getPreviousSibling():_WidgetBase;
	}
	var _Contained:dijit.Constructor<_Contained>;
	export = _Contained;
}

declare module 'dijit/_Container' {
	import _WidgetBase = require('dijit/_WidgetBase');

	interface _Container {
		addChild(widget:_WidgetBase, insertIndex?:number):void;
		getIndexOfChild(child:_WidgetBase):number;
		hasChildren():boolean;
		removeChild(widget:_WidgetBase):void;
		removeChild(index:number):void;
	}
	var _Container:dijit.Constructor<_Container>;
	export = _Container;
}

declare module 'dijit/_CssStateMixin' {
	interface _CssStateMixin {
		hovering:boolean;
		active:boolean;
	}
	export = _CssStateMixin;
}

declare module 'dijit/Destroyable' {
	interface Destroyable {
		destroy(preserveDom?:boolean):void;
		own(...args:any[]):any[];
	}
	var Destroyable:dijit.Constructor<Destroyable>;
	export = Destroyable;
}

declare module 'dijit/Dialog' {
	import ContentPane = require('dijit/layout/ContentPane');
	import _CssStateMixin = require('dijit/_CssStateMixin');
	import _DialogMixin = require('dijit/_DialogMixin');
	import _FormMixin = require('dijit/form/_FormMixin');
	import Promise = require('dojo/promise/Promise');
	import _TemplatedMixin = require('dijit/_TemplatedMixin');

	interface Dialog extends ContentPane, _TemplatedMixin, _FormMixin, _DialogMixin, _CssStateMixin {
		open:boolean;
		duration:number;
		refocus:boolean;
		autofocus:boolean;
		doLayout:boolean;
		draggable:boolean;
		maxRatio:number;
		closable:boolean;

		onLoad():void;
		focus():void;
		show():Promise<boolean>;
		hide():Promise<boolean>;
	}
	var Dialog:dijit.Constructor<Dialog>;
	export = Dialog;
}

declare module 'dijit/_DialogMixin' {
	interface _DialogMixin {
		execute():void;
		onCancel():void;
		onExecute():void;
	}
	var _DialogMixin:dijit.Constructor<_DialogMixin>;
	export = _DialogMixin;
}

declare module 'dijit/focus' {
	import Stateful = require('dojo/Stateful');
	import _WidgetBase = require('dijit/_WidgetBase');

	interface FocusManager extends Stateful, dojo.IEvented {
		activeStack:_WidgetBase[];
		curNode:Node;

		focus(node:Node):void;
		registerIframe(iframe:HTMLIFrameElement):dojo.IHandle;
		registerWin(target:Window, effectiveNode?:Node):dojo.IHandle;
	}
	var FocusManager:FocusManager;
	export = FocusManager;
}

declare module 'dijit/_FocusMixin' {
	import focus = require('dijit/focus');

	interface _FocusMixin {
		_focusManager:typeof focus;
	}
	export = _FocusMixin
}

declare module 'dijit/form/_AutoCompleterMixin' {
	import _SearchMixin = require('dijit/form/_SearchMixin');

	interface _AutoCompleterMixin extends _SearchMixin {
		autoComplete:boolean;
		highlightMatch:string;
		item:any;
		labelAttr:string;
		labelType:string;
		maxHeight:number;
	}
	var _AutoCompleterMixin:dijit.Constructor<_AutoCompleterMixin>;
	export = _AutoCompleterMixin;
}

declare module 'dijit/form/Button' {
	import _FormWidget = require('dijit/form/_FormWidget');
	import _ButtonMixin = require('dijit/form/_ButtonMixin');

	interface Button extends _FormWidget, _ButtonMixin {
		showLabel:boolean;
		iconClass:string;
	}
	var Button:dijit.Constructor<Button>;
	export = Button;
}

declare module 'dijit/form/_ButtonMixin' {
	interface _ButtonMixin {
		onClick(event:Event):boolean;
	}
	var _ButtonMixin:dijit.Constructor<_ButtonMixin>;

	export = _ButtonMixin;
}

declare module 'dijit/form/CheckBox' {
	import _CheckBoxMixin = require('dijit/form/_CheckBoxMixin');
	import ToggleButton = require('dijit/form/ToggleButton');

	interface CheckBox extends ToggleButton, _CheckBoxMixin {}
	var CheckBox:dijit.Constructor<CheckBox>;
	export = CheckBox;
}

declare module 'dijit/form/_CheckBoxMixin' {
	interface _CheckBoxMixin {
		type:string;
		value:string;
		readOnly:boolean;

		reset():void;
	}
	var _CheckBoxMixin:dijit.Constructor<_CheckBoxMixin>;
	export = _CheckBoxMixin;
}

declare module 'dijit/form/ComboBox' {
	import ComboBoxMixin = require('dijit/form/ComboBoxMixin');
	import ValidationTextBox = require('dijit/form/ValidationTextBox');

	interface ComboBox extends ValidationTextBox, ComboBoxMixin {}
	var ComboBox:dijit.Constructor<ComboBox>;
	export = ComboBox;
}

declare module 'dijit/form/ComboBoxMixin' {
	import _AutoCompleterMixin = require('dijit/form/_AutoCompleterMixin');
	import _HasDropDown = require('dijit/_HasDropDown');

	interface ComboBoxMixin extends _HasDropDown, _AutoCompleterMixin {
		dropDownClass:Function;
		hasDownArrow:boolean;
	}
	var ComboBoxMixin:dijit.Constructor<ComboBoxMixin>;
	export = ComboBoxMixin;
}

declare module 'dijit/form/FilteringSelect' {
	import ComboBoxMixin = require('dijit/form/ComboBoxMixin');
	import MappedTextBox = require('dijit/form/MappedTextBox');

	interface FilteringSelect extends MappedTextBox, ComboBoxMixin {}
	var FilteringSelect:dijit.Constructor<FilteringSelect>;
	export = FilteringSelect;
}

declare module 'dijit/form/Form' {
	import _ContentPaneResizeMixin = require('dijit/layout/_ContentPaneResizeMixin');
	import _FormMixin = require('dijit/form/_FormMixin');
	import _TemplatedMixin = require('dijit/_TemplatedMixin');
	import _WidgetBase = require('dijit/_WidgetBase');

	interface Form extends _WidgetBase, _TemplatedMixin, _FormMixin, _ContentPaneResizeMixin {
		name:string;
		action:string;
		method:string;
		encType:string;
		'accept-charset':string;
		accept:string;
		target:string;

		onSubmit(event?:Event):boolean;
		onReset(event?:Event):boolean;
		submit():void;
		reset(event?:Event):void;
	}
	var Form:dijit.Constructor<Form>;
	export = Form;
}

declare module 'dijit/form/_FormMixin' {
	interface _FormMixin {
		state:string;

		connectChildren(inStartup?:boolean):void;
		isValid():boolean;
		onValidStateChange(isValid:boolean):void;
		reset():void;
		validate():boolean;
	}
	var _FormMixin:dijit.Constructor<_FormMixin>;
	export = _FormMixin;
}

declare module 'dijit/form/_FormValueMixin' {
	import _FormWidgetMixin = require('dijit/form/_FormWidgetMixin');

	interface _FormValueMixin extends _FormWidgetMixin {
		readOnly:boolean;

		reset():void;
		undo():void;
	}
	var _FormValueMixin:dijit.Constructor<_FormValueMixin>;
	export = _FormValueMixin;
}

declare module 'dijit/form/_FormValueWidget' {
	import _FormValueMixin = require('dijit/form/_FormValueMixin');
	import _FormWidget = require('dijit/form/_FormWidget');

	interface _FormValueWidget extends _FormWidget, _FormValueMixin {}
	var _FormValueWidget:dijit.Constructor<_FormValueWidget>;
	export = _FormValueWidget;
}

declare module 'dijit/form/_FormWidgetMixin' {
	interface _FormWidgetMixin {
		name:string;
		alt:string;
		value:string;
		type:string;
		'aria-label':string;
		tabIndex:string;
		disabled:boolean;
		intermediateChanges:boolean;
		scrollOnFocus:boolean;
	}
	var _FormWidgetMixin:dijit.Constructor<_FormWidgetMixin>;
	export = _FormWidgetMixin;
}

declare module 'dijit/form/_FormWidget' {
	import _WidgetBase = require('dijit/_WidgetBase');
	import _TemplatedMixin = require('dijit/_TemplatedMixin');
	import _CssStateMixin = require('dijit/_CssStateMixin');
	import _FormWidgetMixin = require('dijit/form/_FormWidgetMixin');

	interface _FormWidget extends _WidgetBase, _TemplatedMixin, _CssStateMixin, _FormWidgetMixin {
		get(key:'disabled'):boolean;
		get(key:'type'):string;
		get(key:'value'):string;
		get(key:string):any;

		set(key:'disabled', value:boolean):void;
		set(key:'type', value:string):void;
		set(key:'value', value:string):void;
		set(key:string, value:any):void;
		set(values:dojo.IMap):void;
	}

	var _FormWidget:dijit.Constructor<_FormWidget>;
	export = _FormWidget;
}

declare module 'dijit/form/MappedTextBox' {
	import ValidationTextBox = require('dijit/form/ValidationTextBox');

	interface MappedTextBox extends ValidationTextBox {
		serialize(value:string, options?:dojo.IMap):string;
	}
	var MappedTextBox:dijit.Constructor<MappedTextBox>;
	export = MappedTextBox;
}

declare module 'dijit/form/RadioButton' {
	import CheckBox = require('dijit/form/CheckBox');
	import _RadioButtonMixin = require('dijit/form/_RadioButtonMixin');

	interface RadioButton extends CheckBox, _RadioButtonMixin {}
	var RadioButton:dijit.Constructor<RadioButton>;
	export = RadioButton;
}

declare module 'dijit/form/_RadioButtonMixin' {
	interface _RadioButtonMixin {
		type:string;
	}
	var _RadioButtonMixin:dijit.Constructor<_RadioButtonMixin>;
	export = _RadioButtonMixin;
}

declare module 'dijit/form/_SearchMixin' {
	interface _SearchMixin {
		fetchProperties:dojo.IMap;
		ignoreCase:boolean;
		pageSize:number;
		query:any;
		queryExpr:string;
		searchAttr:string;
		searchDelay:number;
		store:any;

		onSearch(results:any[], query:dojo.IMap, options:dojo.IMap):void;
	}
	var _SearchMixin:dijit.Constructor<_SearchMixin>;
	export = _SearchMixin;
}

declare module 'dijit/form/TextBox' {
	import _FormValueWidget = require('dijit/form/_FormValueWidget');
	import _TextBoxMixin = require('dijit/form/_TextBoxMixin');

	interface TextBox extends _FormValueWidget, _TextBoxMixin {}
	var TextBox:dijit.Constructor<TextBox>;
	export = TextBox;
}

declare module 'dijit/form/_TextBoxMixin' {
	interface _TextBoxMixin {
		trim:boolean;
		uppercase:boolean;
		lowercase:boolean;
		propercase:boolean;
		maxLength:string;
		selectOnClick:boolean;
		placeHolder:string;
		displayedValue:string;

		filter(value:string):string;
		format(value:string, constraints?:dojo.IMap):string;
		onInput(event:Event):void;
		parse(value:string, constraints?:dojo.IMap):string;
		reset():void;
	}
	var _TextBoxMixin:dijit.Constructor<_TextBoxMixin>;
	export = _TextBoxMixin;
}

declare module 'dijit/form/ToggleButton' {
	import Button = require('dijit/form/Button');
	import _ToggleButtonMixin = require('dijit/form/_ToggleButtonMixin');

	interface ToggleButton extends Button, _ToggleButtonMixin {}
	var ToggleButton:dijit.Constructor<ToggleButton>;
	export = ToggleButton;
}

declare module 'dijit/form/_ToggleButtonMixin' {
	interface _ToggleButtonMixin {
		checked:boolean;

		reset():void;
	}
	var _ToggleButtonMixin:dijit.Constructor<_ToggleButtonMixin>;
	export = _ToggleButtonMixin;
}

declare module 'dijit/form/ValidationTextBox' {
	import TextBox = require('dijit/form/TextBox');

	interface ValidationTextBox extends TextBox {
		constraints:dojo.IMap;
		invalidMessage:string;
		missingMessage:string;
		message:string;
		promptMessage:string;
		pattern:string;
		required:boolean;
		state:string;
		tooltipPosition:string[];

		displayMessage(message?:string):void;
		getErrorMessage(isFocused?:boolean):string;
		getPromptMessage(isFocused?:boolean):string;
		isValid(isFocused?:boolean):boolean;
		validate(isFocused?:boolean):boolean;
		validator(value:any, constraints:dojo.IMap):boolean;
	}
	var ValidationTextBox:dijit.Constructor<ValidationTextBox>;
	export = ValidationTextBox;
}

declare module 'dijit/_HasDropDown' {
	import _FocusMixin = require('dijit/_FocusMixin');
	import _WidgetBase = require('dijit/_WidgetBase');

	interface _HasDropDown extends _FocusMixin {
		dropDown:_WidgetBase;
		autoWidth:boolean;
		forceWidth:boolean;
		maxHeight:number;
		dropDownPosition:string[];

		closeDropDown(focus?:boolean):void;
		openDropDown():void;
		toggleDropDown():void;
	}

	export = _HasDropDown;
}

declare module 'dijit/layout/BorderContainer' {
	import LayoutContainer = require('dijit/layout/LayoutContainer');

	interface BorderContainer {
		gutters:boolean;
		liveSplitters:boolean;
		persist:boolean;
		_splitterClass:Function;
	}
	var BorderContainer:dijit.Constructor<BorderContainer>;
	export = BorderContainer;
}

declare module 'dijit/layout/ContentPane' {
	import _Container = require('dijit/_Container');
	import _ContentPaneResizeMixin = require('dijit/layout/_ContentPaneResizeMixin');
	import Deferred = require('dojo/Deferred');
	import _WidgetBase = require('dijit/_WidgetBase');

	interface ContentPane extends _WidgetBase, _Container, _ContentPaneResizeMixin {
		href:string;
		content:string;
		extractContent:boolean;
		parseOnLoad:boolean;
		preventCache:boolean;
		preload:boolean;
		refreshOnShow:boolean;
		loadingMessage:string;
		errorMessage:string;
		isLoaded:boolean;
		ioArgs:dojo.IMap;
		onLoadDeferred:Deferred<any>;

		cancel():void;
		onContentError(error:Error):void;
		onDownloadEnd():void;
		onDownloadError(error:Error):void;
		onDownloadStart():void;
		onLoad(data:any):void;
		onUnload():void;
		refresh():Deferred<any>;
	}
	var ContentPane:dijit.Constructor<ContentPane>;
	export = ContentPane;
}

declare module 'dijit/layout/_ContentPaneResizeMixin' {
	interface _ContentPaneResizeMixin {
		doLayout:boolean;
		isLayoutContainer:boolean;

		resize(changeSize?:any, resultSize?:any):void;
	}
	var _ContentPaneResizeMixin:dijit.Constructor<_ContentPaneResizeMixin>;
	export = _ContentPaneResizeMixin;
}

declare module 'dijit/layout/LayoutContainer' {
	import _LayoutWidget = require('dijit/layout/_LayoutWidget');

	interface LayoutContainer extends _LayoutWidget {
		design:string;
	}
	var LayoutContainer:dijit.Constructor<LayoutContainer>;
	export = LayoutContainer;
}

declare module 'dijit/layout/_LayoutWidget' {
	import _WidgetBase = require('dijit/_WidgetBase');
	import _Container = require('dijit/_Container');
	import _Contained = require('dijit/_Contained');

	interface _LayoutWidget extends _WidgetBase, _Container, _Contained {
		isLayoutContainer:boolean;

		layout():void;
		resize(changeSize?:any, resultSize?:any):void;
	}
	var _LayoutWidget:dijit.Constructor<_LayoutWidget>;
	export = _LayoutWidget;
}

declare module 'dijit/layout/StackContainer' {
	import _LayoutWidget = require('dijit/layout/_LayoutWidget');
	import Promise = require('dojo/promise/Promise');
	import _WidgetBase = require('dijit/_WidgetBase');

	interface StackContainer extends _LayoutWidget {
		doLayout:boolean;
		persist:boolean;

		closeChild(child:_WidgetBase):void;
		forward():Promise<any>;
		back():Promise<any>;
		selectChild(child:_WidgetBase, animate?:boolean):Promise<any>;
		selectChild(child:string, animate?:boolean):Promise<any>;
	}
	var StackContainer:dijit.Constructor<StackContainer>;
	export = StackContainer;
}

declare module 'dijit/layout/StackController' {
	import _Container = require('dijit/_Container');
	import _TemplatedMixin = require('dijit/_TemplatedMixin');
	import _WidgetBase = require('dijit/_WidgetBase');

	interface StackController extends _WidgetBase, _TemplatedMixin, _Container {
		containerId:string;
		buttonWidget:Function;
		buttonWidgetCloseClass:string;

		adjacent(forward?:boolean):_WidgetBase;
		onAddChild(page:_WidgetBase, index?:number):void;
		onButtonClick(page:_WidgetBase):void;
		onCloseButtonClick(page:_WidgetBase):void;
		onRemoveChild(page:_WidgetBase):void;
		onSelectChild(page:_WidgetBase):void;
	}
	var StackController:dijit.Constructor<StackController>;
	export = StackController;
}

declare module 'dijit/layout/TabContainer' {
	import _TabContainerBase = require('dijit/layout/_TabContainerBase');

	interface TabContainer extends _TabContainerBase {
		controllerWidget:Function;
		useMenu:boolean;
		useSlider:boolean;
	}
	var TabContainer:dijit.Constructor<TabContainer>;
	export = TabContainer;
}

declare module 'dijit/layout/_TabContainerBase' {
	import StackContainer = require('dijit/layout/StackContainer');
	import _TemplatedMixin = require('dijit/_TemplatedMixin');

	interface _TabContainerBase extends StackContainer, _TemplatedMixin {
		tabPosition:string;
		tabStrip:boolean;
		nested:boolean;
	}
	var _TabContainerBase:dijit.Constructor<_TabContainerBase>;
	export = _TabContainerBase;
}

declare module 'dijit/layout/TabController' {
	import StackController = require('dijit/layout/StackController');

	interface TabController extends StackController {
		tabPosition:string;
	}
	var TabController:dijit.Constructor<TabController>;
	export = TabController;
}

declare module 'dijit/ProgressBar' {
	import _TemplatedMixin = require('dijit/_TemplatedMixin');
	import _WidgetBase = require('dijit/_WidgetBase');

	interface ProgressBar extends _WidgetBase, _TemplatedMixin {
		value:string;
		maximum:number;
		places:number;
		indeterminate:boolean;
		label:string;
		name:string;

		onChange():void;
	}
	var ProgressBar:dijit.Constructor<ProgressBar>;
	export = ProgressBar;
}

declare module 'dijit/_TemplatedMixin' {
	import _AttachMixin = require('dijit/_AttachMixin');

	interface _TemplatedMixin extends _AttachMixin {
		templateString:string;
		_stringRepl(template:string):string;
	}

	export = _TemplatedMixin;
}

declare module 'dijit/_WidgetBase' {
	import Destroyable = require('dijit/Destroyable');
	import Stateful = require('dojo/Stateful');

	interface _WidgetBase extends Stateful, Destroyable, dojo.IEvented {
		id:string;
		baseClass:string;
		domNode:string;

		// LayoutContainer
		region:string;
		layoutAlign:string;
		layoutPriority:number;

		// BorderContainer
		splitter:boolean;
		minSize:number;
		maxSize:number;

		// StackContainer
		closable:boolean;
		disabled:boolean;
		selected:boolean;
		showTitle:boolean;

		buildRendering():void;
		destroy(preserveDom?:boolean):void;
		destroyDescendants(preserveDom?:boolean):void;
		destroyRecursive(preserveDom?:boolean):void;
		destroyRendering(preserveDom?:boolean):void;
		emit(type:string, event?:any):boolean;
		getChildren():_WidgetBase[];
		getParent():_WidgetBase;
		on(type:string, listener:Function):dojo.IHandle;
		on(type:dojo.IExtensionEvent, listener:Function):dojo.IHandle;
		own(...args:any[]):dojo.IHandle[];
		placeAt(id:string, position?:string):_WidgetBase;
		placeAt(id:string, position?:number):_WidgetBase;
		placeAt(element:HTMLElement, position?:string):_WidgetBase;
		placeAt(element:HTMLElement, position?:number):_WidgetBase;
		placeAt(widget:_WidgetBase, position?:string):_WidgetBase;
		placeAt(widget:_WidgetBase, position?:number):_WidgetBase;
		postMixInProperties():void;
		postCreate():void;
		startup():void;
	}
	var _WidgetBase:dijit.Constructor<_WidgetBase>;
	export = _WidgetBase;
}

declare module 'dijit/_WidgetsInTemplateMixin' {
	interface _WidgetsInTemplateMixin {
		widgetsInTemplate:boolean;
	}
	var _WidgetsInTemplateMixin:dijit.Constructor<_WidgetsInTemplateMixin>;
	export = _WidgetsInTemplateMixin;
}
