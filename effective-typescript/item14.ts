interface SaveAction {
  type: 'save';
  // ...
}
interface LoadAction {
  type: 'load';
  // ...
}
type Action = SaveAction | LoadAction;
// type ActionType = 'save' | 'load';

type ActionType = Action['type'];
type ActionRec = Pick<Action, 'type'>

const foo: ActionType = 'save';
const boo: ActionRec = {
  type: 'load'
}