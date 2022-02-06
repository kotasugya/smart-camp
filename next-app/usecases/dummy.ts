import { useAppDispatch } from '@/store';
import { DummyAction } from '@/store/actions/dummy';
import { DummyState } from '@/store/states/dummy';

export const init = async () => {
  const dummy: DummyState = {
    name: 'initDummyState',
  };
  useAppDispatch(DummyAction.updateDummyStateAction(dummy));
};

export const update = async (name: string) => {
  const dummy: DummyState = {
    name,
  };
  useAppDispatch(DummyAction.updateDummyStateAction(dummy));
};

export const clear = async () => {
  useAppDispatch(DummyAction.clearDummyStateAction());
};
