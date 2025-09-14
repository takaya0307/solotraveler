// メインエクスポート
export * from './types';
export * from './templates';
export * from './countries';

// 便利な関数のエクスポート
export { getCountryInfo } from './templates';
export { generateBaseMetadata } from './templates';

// ページ別メタデータのエクスポート
export { generateAboutWorkingHolidayMetadata } from './aboutWorkingHoliday'; 