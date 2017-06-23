import { View } from 'ui/core/view';
import { Color } from 'color';

declare const android: any;
export enum Types {
  LINEAR_GRADIENT,
  RADIAL_GRADIENT,
  SWEEP_GRADIENT,
  RING,
}
export const Orientation = {
  BL_TR: 'BL_TR',
  BOTTOM_TOP: 'BOTTOM_TOP',
  BR_TL: 'BR_TL',
  LEFT_RIGHT: 'LEFT_RIGHT',
  RIGHT_LEFT: 'RIGHT_LEFT',
  TL_BR: 'TL_BR',
  TOP_BOTTOM: 'TOP_BOTTOM',
  TR_BL: 'TR_BL',
}

export function setBackgroundGradient(args: {
  view: View, colorCodes: string[], type?: number, orientation?: string
})
{
  let colors = [];
  let backgroundDrawable = new android.graphics.drawable.GradientDrawable();
  args.colorCodes.forEach(c => colors.push((new Color(c)).android));
  backgroundDrawable.setColors(colors);
  backgroundDrawable.setGradientType(args.type || Types.LINEAR_GRADIENT); // Defaults Linear Gradient

  const orient = args.orientation || Orientation.LEFT_RIGHT; // Defaults to LEFT_RIGHT
  const orientation = android.graphics.drawable.GradientDrawable.Orientation[orient];
  backgroundDrawable.setOrientation(orientation);
  args.view.android.setBackgroundDrawable(backgroundDrawable);
}
