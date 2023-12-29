//这里主要是声明各种游戏内常用的对象的结构
type listeners = {
    [key in keyof HTMLElementEventMap]?: EventListener;
};

type styleObj = {
    [key in keyof CSSStyleDeclaration]?: string;
}

/** key为字符串的map */
interface SMap<V> {
    [key: string]: V
}

/** key为number的map */
interface NMap<V> {
    [key: number]: V
}
