"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteContent } from "@/lib/constants";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FadeInView } from "@/components/ui/FadeInView";
import { GlowBackground } from "@/components/ui/DecorativeElements";

const { form } = siteContent;

const fieldPlaceholders = {
  name: "Ваше имя",
  phone: "+7 (___) ___-__-__",
  messenger: "@username или номер",
  comment: "Ваш вопрос или пожелание",
} as const;

const fieldErrors = {
  name: "Пожалуйста, укажите ваше имя",
  phone: "Пожалуйста, укажите номер телефона",
  messenger: "Пожалуйста, укажите способ связи",
} as const;

interface FormData {
  name: string;
  phone: string;
  messenger: string;
  comment: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  messenger?: string;
}

export function RegistrationForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    messenger: "",
    comment: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = fieldErrors.name;
    if (!formData.phone.trim()) newErrors.phone = fieldErrors.phone;
    if (!formData.messenger.trim()) newErrors.messenger = fieldErrors.messenger;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <Section id={form.id} tone="warm">
      <GlowBackground />
      <div className="relative z-10 mx-auto max-w-2xl px-5 sm:px-6 md:px-8">
        <SectionHeading title={form.title} subtitle={form.subtitle} />

        <FadeInView delay={0.2}>
          <div className="card-premium glow-gold p-6 sm:p-8 md:p-12">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-6 sm:py-8"
                >
                  <div className="w-16 h-px shimmer-line mx-auto mb-6" aria-hidden="true" />
                  <p className="heading-serif text-lg sm:text-xl md:text-2xl leading-[1.5]">
                    {form.successMessage}
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={handleSubmit}
                  noValidate
                  aria-label="Форма записи на ретрит"
                >
                  <div className="space-y-5 sm:space-y-6">
                    {(["name", "phone", "messenger"] as const).map((field) => (
                      <div key={field}>
                        <label
                          htmlFor={field}
                          className="block text-[10px] sm:text-xs uppercase tracking-[0.15em] text-text-accent mb-2"
                        >
                          {form.fields[field]}
                        </label>
                        <input
                          id={field}
                          type={field === "phone" ? "tel" : "text"}
                          value={formData[field]}
                          onChange={(e) => handleChange(field, e.target.value)}
                          placeholder={fieldPlaceholders[field]}
                          className={`w-full min-h-[48px] px-4 py-3.5 bg-warm-white/70 border rounded-sm text-text text-[15px] placeholder:text-text-muted/40 transition-colors duration-300 focus:outline-none focus:border-gold/45 focus:ring-1 focus:ring-gold/15 ${
                            errors[field] ? "border-rose-dust/60" : "border-gold/15"
                          }`}
                          aria-invalid={!!errors[field]}
                          aria-describedby={errors[field] ? `${field}-error` : undefined}
                        />
                        {errors[field] && (
                          <p id={`${field}-error`} className="mt-1.5 text-xs text-rose-dust" role="alert">
                            {errors[field]}
                          </p>
                        )}
                      </div>
                    ))}

                    <div>
                      <label
                        htmlFor="comment"
                        className="block text-[10px] sm:text-xs uppercase tracking-[0.15em] text-text-accent mb-2"
                      >
                        {form.fields.comment}
                      </label>
                      <textarea
                        id="comment"
                        value={formData.comment}
                        onChange={(e) => handleChange("comment", e.target.value)}
                        placeholder={fieldPlaceholders.comment}
                        rows={3}
                        className="w-full px-4 py-3.5 bg-warm-white/70 border border-gold/15 rounded-sm text-text text-[15px] placeholder:text-text-muted/40 transition-colors duration-300 focus:outline-none focus:border-gold/45 focus:ring-1 focus:ring-gold/15 resize-none"
                      />
                    </div>
                  </div>

                  <div className="mt-7 sm:mt-8">
                    <Button
                      type="submit"
                      variant="primary"
                      disabled={isSubmitting}
                      className="w-full uppercase tracking-[0.2em] text-xs"
                    >
                      {isSubmitting ? "Отправка..." : form.button}
                    </Button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </FadeInView>
      </div>
    </Section>
  );
}
