declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}

declare module "vue-material/dist/components" {

  import _Vue from "vue"; // <-- notice the changed import

  // export type PluginFunction<T> = (Vue: typeof _Vue, options?: T) => void;
  export function MdApp(Vue: typeof _Vue, options?: any): void 
  export function MdButton(Vue: typeof _Vue, options?: any): void 
  export function MdContent(Vue: typeof _Vue, options?: any): void
  export function MdDrawer(Vue: typeof _Vue, options?: any): void 
  export function MdIcon(Vue: typeof _Vue, options?: any): void   
  export function MdList(Vue: typeof _Vue, options?: any): void  
  export function MdTabs(Vue: typeof _Vue, options?: any): void 
  export function MdCard(Vue: typeof _Vue, options?: any): void 
  export function MdTable(Vue: typeof _Vue, options?: any): void 
  export function MdTableRow(Vue: typeof _Vue, options?: any): void 
  export function MdTableCell(Vue: typeof _Vue, options?: any): void 
  export function MdTableToolbar(Vue: typeof _Vue, options?: any): void 
  export function MdToolbar(Vue: typeof _Vue, options?: any): void 
}
