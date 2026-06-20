/**
 * Поля персональных данных (152-ФЗ).
 * Эти поля никогда не должны передаваться в ИИ-генерацию.
 */
export const PERSONAL_DATA_FIELDS = [
  "name",
  "fio",
  "fullName",
  "phone",
  "email",
  "tel",
] as const;

export type PersonalDataField = (typeof PERSONAL_DATA_FIELDS)[number];

export type ApplicationPersonalData = {
  name: string;
  phone: string;
};

export type ApplicationFormPayload = ApplicationPersonalData & {
  comment: string;
};

/** Удаляет персональные поля перед отправкой в ИИ-генерацию (бриф, КП и т.д.). */
export function stripPersonalDataForAi<T extends Record<string, unknown>>(
  data: T
): Omit<T, PersonalDataField> {
  const sanitized = { ...data };

  for (const field of PERSONAL_DATA_FIELDS) {
    if (field in sanitized) {
      delete sanitized[field];
    }
  }

  return sanitized;
}

/**
 * Подставляет персональные данные в итоговый документ
 * только после завершения ИИ-генерации.
 */
export function mergePersonalDataIntoDocument<T extends Record<string, unknown>>(
  generatedContent: T,
  personalData: ApplicationPersonalData
): T & ApplicationPersonalData {
  return {
    ...generatedContent,
    name: personalData.name,
    phone: personalData.phone,
  };
}
