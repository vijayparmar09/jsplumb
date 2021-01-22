import { Dictionary, jsPlumbElement, Offset } from '../common';
import { JsPlumbInstance } from "../core";
import { UIGroup } from "./group";
export interface AddGroupOptions {
    id: string;
    el: any;
    collapsed?: boolean;
}
export declare class GroupManager {
    instance: JsPlumbInstance;
    groupMap: Dictionary<UIGroup>;
    _connectionSourceMap: Dictionary<UIGroup>;
    _connectionTargetMap: Dictionary<UIGroup>;
    constructor(instance: JsPlumbInstance);
    private _cleanupDetachedConnection;
    addGroup(params: AddGroupOptions): UIGroup;
    getGroup(groupId: string | UIGroup): UIGroup;
    getGroupFor(el: jsPlumbElement): UIGroup;
    getGroups(): Array<UIGroup>;
    removeGroup(group: string | UIGroup, deleteMembers?: boolean, manipulateView?: boolean, doNotFireEvent?: boolean): Dictionary<Offset>;
    removeAllGroups(deleteMembers?: boolean, manipulateView?: boolean, doNotFireEvent?: boolean): void;
    forEach(f: (g: UIGroup) => any): void;
    orphan(_el: any): [string, Offset];
    private _setGroupVisible;
    _updateConnectionsForGroup(group: UIGroup): void;
    private _collapseConnection;
    private _expandConnection;
    private isElementDescendant;
    collapseGroup(group: string | UIGroup): void;
    /**
     * Cascade a collapse from the given `collapsedGroup` into the given `targetGroup`.
     * @param collapsedGroup
     * @param targetGroup
     * @param collapsedIds Set of connection ids for already collapsed connections, which we can ignore.
     */
    cascadeCollapse(collapsedGroup: UIGroup, targetGroup: UIGroup, collapsedIds: Set<string>): void;
    expandGroup(group: string | UIGroup, doNotFireEvent?: boolean): void;
    /**
     * Cascade an expand from the given `collapsedGroup` into the given `targetGroup`.
     * @param expandedGroup
     * @param targetGroup
     */
    cascadeExpand(expandedGroup: UIGroup, targetGroup: UIGroup): void;
    toggleGroup(group: string | UIGroup): void;
    repaintGroup(group: string | UIGroup): void;
    addToGroup(group: string | UIGroup, doNotFireEvent: boolean, ...el: Array<jsPlumbElement>): void;
    removeFromGroup(group: string | UIGroup, doNotFireEvent: boolean, ...el: Array<jsPlumbElement>): void;
    getAncestors(group: UIGroup): Array<UIGroup>;
    isAncestor(group: UIGroup, possibleAncestor: UIGroup): boolean;
    getDescendants(group: UIGroup): Array<UIGroup>;
    isDescendant(possibleDescendant: UIGroup, ancestor: UIGroup): boolean;
    reset(): void;
}
