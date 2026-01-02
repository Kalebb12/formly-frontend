import type { FormElementInstance } from "@/components/FormElements";
import { createSlice } from "@reduxjs/toolkit";

type InitialStateType = {
  elements: FormElementInstance[];
  // addElement: (index: number, element: FormElementInstance) => void;
  // removeElement: (index: number) => void;
}

const initialState: InitialStateType = {
  elements: [],
  // addElement: () => { },
  // removeElement: () => { },
};


const designerSlice = createSlice({
  name: "designer",
  initialState,
  reducers: {
    addElement: (state, action) => {
      const newElements = [...state.elements];
      newElements.splice(action.payload.index, 0, action.payload.element);
      state.elements = newElements;
    },
    removeElement: (state, action) => {
      state.elements = state.elements.filter((el) => el.id !== action.payload.id);
    },
  },
})

export const { addElement, removeElement } = designerSlice.actions;
export default designerSlice.reducer;