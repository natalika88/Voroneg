import { siteContent } from "@/lib/constants";

const { brand } = siteContent;

export function buildTelegramApplicationUrl(
  telegramHref: string,
  data: { name: string; phone: string; comment: string }
): string {
  const lines = [
    `Здравствуйте! Хочу записаться на ретрит «${brand.name}».`,
    "",
    `Имя: ${data.name}`,
    `Телефон: ${data.phone}`,
  ];

  if (data.comment) {
    lines.push(`Комментарий: ${data.comment}`);
  }

  const username = telegramHref.replace("https://t.me/", "").replace("@", "");
  return `https://t.me/${username}?text=${encodeURIComponent(lines.join("\n"))}`;
}
