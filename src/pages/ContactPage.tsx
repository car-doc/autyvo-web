import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { Mail, MapPin, MessageSquare, HelpCircle, Wrench, CheckCircle, AlertCircle } from 'lucide-react';
import { CONTACT_EMAIL, SUPPORT_EMAIL, LEGAL_ENTITY } from '@/constants';
import ContactForm, { ContactFormData } from '../components/forms/ContactForm';
import { contactService } from '@/services/contactService';
import Section, { SectionHeader } from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

const ContactPage: React.FC = () => {
  const { t } = useTranslation('common');
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleSubmit = async (data: ContactFormData) => {
    setSubmitStatus('loading');
    setErrorMessage('');

    try {
      await contactService.submitContactRequest({
        variant: 'contact',
        name: data.name,
        email: data.email,
        phone: data.phone,
        subject: data.subject,
        message: data.message,
        consent: data.consent,
        website: data.website, // honeypot field
      });

      setSubmitStatus('success');
    } catch (error) {
      console.error('Error submitting contact form:', error);
      setSubmitStatus('error');
      setErrorMessage('Nous n\'avons pas pu transmettre votre demande. Veuillez réessayer ultérieurement.');
    }
  };

  const faqItems = t('contact.faq.items', { returnObjects: true }) as Array<{ question: string; answer: string }>;

  return (
    <>
      <Helmet>
        <title>{t('contact.meta.title')}</title>
        <meta name="description" content={t('contact.meta.description')} />
      </Helmet>

      <div className="pt-20">
        {/* Hero Section */}
        <Section background="gradient" className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(2,177,151,0.15),transparent_70%)]"></div>
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <MessageSquare className="w-5 h-5 text-brand-primary" />
              <span className="text-sm font-medium text-white">Nous sommes à votre écoute</span>
            </div>
            <SectionHeader
              title={t('contact.hero.title')}
              subtitle={t('contact.hero.subtitle')}
              light
            />
          </div>
        </Section>

        {/* Content Section */}
        <Section background="white">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Formulaire */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-brand-secondary mb-8">
                {t('contact.form.title')}
              </h2>

              {/* Success Message */}
              {submitStatus === 'success' && (
                <Card variant="outlined" className="mb-6 border-green-200 bg-green-50 animate-fade-in">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <CheckCircle className="text-green-600" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-green-800 mb-2 text-lg">Message envoyé avec succès !</h3>
                      <p className="text-green-700">
                        Nous avons bien reçu votre message et vous répondrons dans les plus brefs délais.
                      </p>
                    </div>
                  </div>
                </Card>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <Card variant="outlined" className="mb-6 border-red-200 bg-red-50 animate-fade-in">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-red-100 rounded-lg">
                      <AlertCircle className="text-red-600" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-red-800 mb-2 text-lg">Erreur lors de l'envoi</h3>
                      <p className="text-red-700">
                        {errorMessage}
                      </p>
                    </div>
                  </div>
                </Card>
              )}

                <ContactForm
                  variant="contact"
                  onSubmit={handleSubmit}
                  isLoading={submitStatus === 'loading'}
                  translations={{
                    fields: {
                      name: t('contact.form.name'),
                      email: t('contact.form.email'),
                      phone: t('contact.form.phone'),
                      subject: t('contact.form.subject'),
                      message: t('contact.form.message'),
                    },
                    placeholders: {
                      name: t('contact.form.placeholders.name'),
                      email: t('contact.form.placeholders.email'),
                      phone: t('contact.form.placeholders.phone'),
                      message: t('contact.form.placeholders.message'),
                    },
                    subjects: {
                      select: t('contact.form.subjects.select'),
                      support: t('contact.form.subjects.support'),
                      question: t('contact.form.subjects.question'),
                      partnership: t('contact.form.subjects.partnership'),
                      feedback: t('contact.form.subjects.feedback'),
                      other: t('contact.form.subjects.other'),
                    },
                    submitButton: t('contact.form.submit'),
                    consent: {
                      label: t('contact.form.consent.label'),
                      required: t('contact.form.consent.required'),
                    },
                    validation: {
                      required: t('contact.form.validation.required'),
                      email: t('contact.form.validation.email'),
                    },
                  }}
                />
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Support Technique */}
                <Card variant="gradient" className="bg-gradient-to-br from-brand-primary to-brand-primary-dark text-white border-none">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <div className="p-2 bg-white/20 rounded-lg">
                      <Wrench size={24} />
                    </div>
                    {t('contact.support.title')}
                  </h3>
                  <p className="mb-6 leading-relaxed">
                    {t('contact.support.description')}
                  </p>
                  <div className="flex items-start gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                    <Mail className="mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold mb-1">{t('contact.support.email')}</p>
                      <a
                        href={`mailto:${SUPPORT_EMAIL}`}
                        className="text-white hover:text-brand-accent transition-colors underline font-medium"
                      >
                        {SUPPORT_EMAIL}
                      </a>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-white/20">
                    <p className="text-sm text-white/90">
                      {t('contact.support.hours')}
                    </p>
                  </div>
                </Card>

                {/* Contact Général */}
                <Card variant="outlined" className="border-2 border-brand-secondary hover:border-brand-primary transition-colors duration-300">
                  <h3 className="text-xl font-bold text-brand-secondary mb-4 flex items-center gap-2">
                    <div className="p-2 bg-brand-primary/10 rounded-lg">
                      <MessageSquare className="text-brand-primary" size={24} />
                    </div>
                    {t('contact.general.title')}
                  </h3>
                  <p className="mb-6 text-gray-600 leading-relaxed">
                    {t('contact.general.description')}
                  </p>
                  <div className="space-y-6">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-brand-primary/10 rounded-lg">
                        <Mail className="text-brand-primary" size={20} />
                      </div>
                      <div>
                        <p className="font-semibold text-brand-secondary mb-1">{t('contact.general.email')}</p>
                        <a
                          href={`mailto:${CONTACT_EMAIL}`}
                          className="text-gray-600 hover:text-brand-primary transition-colors font-medium"
                        >
                          {CONTACT_EMAIL}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-brand-primary/10 rounded-lg">
                        <MapPin className="text-brand-primary" size={20} />
                      </div>
                      <div>
                        <p className="font-semibold text-brand-secondary mb-1">{t('contact.general.address')}</p>
                        <p className="text-gray-600 leading-relaxed">
                          {LEGAL_ENTITY.address.street}<br />
                          {LEGAL_ENTITY.address.postalCode} {LEGAL_ENTITY.address.city}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Besoin d'aide */}
                <Card variant="default" className="bg-gradient-to-br from-gray-50 to-white">
                  <h4 className="font-bold text-brand-secondary mb-4 flex items-center gap-2">
                    <div className="p-2 bg-brand-primary/10 rounded-lg">
                      <HelpCircle className="text-brand-primary" size={24} />
                    </div>
                    {t('contact.help.title')}
                  </h4>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {t('contact.help.description')}
                  </p>
                  <Button
                    variant="secondary"
                    className="w-full"
                    leftIcon={<MessageSquare size={18} />}
                  >
                    {t('contact.help.cta')}
                  </Button>
                </Card>
              </div>
            </div>
        </Section>

        {/* FAQ Section */}
        <Section background="gray">
          <SectionHeader
            title={t('contact.faq.title')}
          />
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {faqItems.map((item, index) => (
              <Card key={index} variant="default" hover className="group">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-brand-primary/10 rounded-lg group-hover:bg-brand-primary/20 transition-colors duration-300">
                    <HelpCircle className="text-brand-primary" size={20} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-brand-secondary mb-3 group-hover:text-brand-primary transition-colors">
                      {item.question}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Section>
      </div>
    </>
  );
};

export default ContactPage;
