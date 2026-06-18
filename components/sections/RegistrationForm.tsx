"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteContent } from "@/lib/constants";
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

    // Mock submit — replace with real API endpoint later
    // await fetch('/api/register', { method: 'POST', body: JSON.stringify(formData) });
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
    <section id={form.id} className="relative py-24 md:py-32 overflow-hidden">
      <GlowBackground />
      <div className="relative mx-auto max-w-2xl px-5 md:px-8">
        <SectionHeading title={form.title} subtitle={form.subtitle} />

        <FadeInView delay={0.2}>
          <div className="relative p-8 md:p-12 bg-ivory/90 border border-gold/20 rounded-sm glow-gold">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-px bg-gold/50 mx-auto mb-6" aria-hidden="true" />
                  <p className="font-display text-xl md:text-2xl text-text-dark leading-relaxed">
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
                  <div className="space-y-6">
                    {(["name", "phone", "messenger"] as const).map((field) => (
                      <div key={field}>
                        <label
                          htmlFor={field}
                          className="block text-xs uppercase tracking-[0.15em] text-text-accent mb-2"
                        >
                          {form.fields[field]}
                        </label>
                        <input
                          id={field}
                          type={field === "phone" ? "tel" : "text"}
                          value={formData[field]}
                          onChange={(e) => handleChange(field, e.target.value)}
                          placeholder={fieldPlaceholders[field]}
                          className={`w-full px-4 py-3.5 bg-cream/50 border rounded-sm text-text placeholder:text-text-muted/40 transition-colors duration-300 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/20 ${
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
                        className="block text-xs uppercase tracking-[0.15em] text-text-accent mb-2"
                      >
                        {form.fields.comment}
                      </label>
                      <textarea
                        id="comment"
                        value={formData.comment}
                        onChange={(e) => handleChange("comment", e.target.value)}
                        placeholder={fieldPlaceholders.comment}
                        rows={3}
                        className="w-full px-4 py-3.5 bg-cream/50 border border-gold/15 rounded-sm text-text placeholder:text-text-muted/40 transition-colors duration-300 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/20 resize-none"
                      />
                    </div>
                  </div>

                  <div className="mt-8">
                    <Button
                      type="submit"
                      variant="primary"
                      disabled={isSubmitting}
                      className="w-full uppercase tracking-widest text-xs"
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
    </section>
  );
}
