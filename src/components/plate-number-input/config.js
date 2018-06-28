export const DELETE = 'delete';
export const CONFIRMED = '确定';
/**
 * 键盘按键
 */
export const keyboard = [
  [
    [CONFIRMED],
    ['粤', '川', '津', '沪', '渝', '蒙', '新', '藏', '宁', '桂'],
    ['陕', '浙', '晋', '冀', '青', '鲁', '豫', '苏', '皖', '辽'],
    ['贵', '闽', '赣', '湘', '鄂', '京', '琼', '甘', '云', '黑'],
    ['吉', '', '', '', '', '', '', '', '', DELETE]
  ],
  [
    [CONFIRMED],
    ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'P', '港', '澳'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', '学'],
    ['', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '', DELETE]
  ]
];

/**
 * 禁用的键盘
 */
export const disableKeyBoard = [
  [],
  ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '港', '澳', '学'],
  ['港', '澳', '学'],
  ['港', '澳', '学'],
  ['港', '澳', '学'],
  ['港', '澳', '学'],
  [],
  []
];
/**
 * 车牌输入框
 */
export const inputList = Array(8)
  .fill(undefined)
  .map(() => JSON.parse(`{"text":""}`));
/**
 * 车牌类型
 */
export const CAR_NUMBER_TYPES = {
  /**
   * 正常车牌
   */
  NORMAL: 'normal',
  /**
   * 新能源车牌
   */
  NEWPOWER: 'newpower'
};
