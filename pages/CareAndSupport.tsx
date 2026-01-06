
import React from 'react';

const CareAndSupport: React.FC = () => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Hero Section */}
      <section className="bg-white pt-16 md:pt-24 pb-12 md:pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-extrabold text-accentGreen tracking-tight leading-tight">
                Pflege & Begleitung
              </h1>
              <h2 className="text-xl md:text-2xl font-bold text-accentBrown uppercase tracking-wider">
                Unterstützung dort, wo der Alltag stattfindet
              </h2>
            </div>
            <div className="space-y-6 text-lg md:text-xl text-textDark/70 leading-relaxed">
              <p className="font-semibold text-textDark">
                Ambulante psychiatrische Pflege unterstützt Menschen mit psychischen Erkrankungen im täglichen Leben.
              </p>
              <p>
                Im Mittelpunkt steht nicht die Diagnose, sondern die konkrete Alltagssituation und die Frage, wie Stabilität, Orientierung und Selbstständigkeit gefördert werden können.
              </p>
              <p className="bg-secondary/50 p-6 rounded-2xl border-l-4 border-accentGreen">
                Die Begleitung erfolgt überwiegend aufsuchend – im gewohnten Umfeld und angepasst an die individuelle Lebenssituation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sektion: Abklärung, Beratung und Koordination */}
      <section className="py-24 px-6 bg-secondary/30 border-y border-gray-100">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-accentGreen tracking-tight">Abklärung, Beratung und Koordination</h2>
            <div className="space-y-6 text-lg text-textDark/70 leading-relaxed">
              <p>
                Am Anfang steht eine sorgfältige pflegerische Abklärung. Gemeinsam wird eingeschätzt, wo Unterstützung notwendig ist und welche Ressourcen bereits vorhanden sind.
              </p>
              <p className="text-sm font-bold text-accentBrown uppercase tracking-[0.2em]">Dazu gehören:</p>
              <ul className="space-y-4">
                {[
                  "Einschätzung des Unterstützungsbedarfs im Alltag",
                  "Einbezug von Angehörigen, wenn gewünscht",
                  "Klärung von Zuständigkeiten",
                  "Koordination mit Ärzt:innen, Psychiater:innen und weiteren Stellen",
                  "Mitwirkung an Krisen- und Notfallplänen"
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start group">
                    <div className="w-6 h-6 rounded-full bg-accentGreen/10 flex items-center justify-center text-accentGreen flex-shrink-0 mt-1">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="pt-4 italic text-base">
                Ziel ist eine bedarfsgerechte, abgestimmte Versorgung und die Vermeidung von Über- oder Unterversorgung.
              </p>
            </div>
          </div>
          <div className="hidden lg:block relative">
             <div className="aspect-square bg-white rounded-[60px] p-4 shadow-xl border border-gray-50 flex items-center justify-center">
                <div className="text-center space-y-4">
                   <div className="w-20 h-20 bg-accentGreen text-white rounded-3xl flex items-center justify-center mx-auto shadow-lg">
                      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
                   </div>
                   <span className="block text-accentBrown font-black uppercase tracking-widest text-xs">Sorgfältige Abklärung</span>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Sektion: Unterstützung in belastenden Phasen */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <div className="order-2 lg:order-1 space-y-8">
             <div className="bg-accentGreen p-10 md:p-12 rounded-[50px] shadow-2xl text-white">
                <h3 className="text-xl font-bold mb-6 uppercase tracking-widest text-white/50">Pflegerische Begleitung kann beinhalten:</h3>
                <ul className="space-y-6">
                  {[
                    "Unterstützung im Umgang mit belastenden Symptomen im Alltag",
                    "Begleitung in Krisensituationen",
                    "Förderung von Orientierung und Sicherheit",
                    "Unterstützung bei der Medikamenteneinnahme nach ärztlicher Anordnung",
                    "Erkennen von Frühwarnzeichen und rechtzeitiges Gegensteuern"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 items-start text-lg border-b border-white/10 pb-4 last:border-0">
                      <div className="w-2 h-2 rounded-full bg-accentBrown mt-2.5 flex-shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-8 pt-8 border-t border-white/10 text-sm font-medium italic opacity-70">
                  Die Pflege arbeitet dabei handlungsorientiert im Hier und Jetzt.
                </p>
             </div>
          </div>
          <div className="order-1 lg:order-2 space-y-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-accentGreen tracking-tight">Unterstützung in belastenden Phasen</h2>
            <div className="space-y-6 text-lg text-textDark/70 leading-relaxed">
              <p>
                Psychische Erkrankungen verlaufen oft nicht konstant. In belastenden oder instabilen Phasen kann ambulante psychiatrische Pflege stabilisierend wirken.
              </p>
              <div className="p-6 bg-secondary/30 rounded-2xl border-l-4 border-accentBrown">
                 <p className="text-accentGreen font-bold italic">
                   "Sicherheit gewinnen, wenn Symptome den Alltag erschweren."
                 </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sektion: Unterstützung im täglichen Leben */}
      <section className="py-24 px-6 bg-secondary/20">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="max-w-3xl space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-accentGreen tracking-tight">Unterstützung im täglichen Leben</h2>
            <p className="text-lg text-textDark/70 leading-relaxed">
              Psychische Erkrankungen können alltägliche Tätigkeiten erheblich erschweren. Ambulante psychiatrische Pflege unterstützt dort, wo krankheitsbedingt Einschränkungen bestehen.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
             {[
               { title: "Tagesstruktur", desc: "Strukturierung des Tages und Aufbau von Routinen." },
               { title: "Selbstfürsorge", desc: "Unterstützung bei Selbstfürsorge und Grundbedürfnissen." },
               { title: "Eigenständigkeit", desc: "Förderung von Eigenständigkeit im Alltag." },
               { title: "Kompetenzen", desc: "Erhalt oder Wiedergewinnung von Alltagskompetenzen." }
             ].map((item, i) => (
               <div key={i} className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center text-center space-y-4">
                  <div className="w-12 h-12 bg-accentBrown/10 rounded-2xl flex items-center justify-center text-accentBrown">
                    <span className="font-bold">0{i+1}</span>
                  </div>
                  <h3 className="font-bold text-accentGreen uppercase tracking-widest text-xs">{item.title}</h3>
                  <p className="text-sm text-textDark/60">{item.desc}</p>
               </div>
             ))}
          </div>

          <div className="text-center pt-8">
             <p className="text-lg font-bold text-accentGreen">
               Ziel ist nicht die Übernahme von Aufgaben, sondern die Förderung von Selbstständigkeit.
             </p>
          </div>
        </div>
      </section>

      {/* Sektion: Recovery-orientierte Haltung */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-accentGreen tracking-tight">Recovery-orientierte Haltung</h2>
            <p className="text-lg text-textDark/70 leading-relaxed">
              Die Arbeit orientiert sich am Recovery-Ansatz. Recovery bedeutet nicht zwingend Heilung, sondern ein möglichst selbstbestimmtes Leben trotz psychischer Erkrankung.
            </p>
            <p className="text-base text-textDark/60">
              Die pflegerische Begleitung versteht sich dabei als Unterstützung im persönlichen Entwicklungsprozess.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
             {[
               { title: "Beziehung", text: "Beziehung und Vertrauen als Basis." },
               { title: "Fähigkeiten", text: "Stärkung vorhandener Fähigkeiten." },
               { title: "Hoffnung", text: "Förderung von Hoffnung und Eigenverantwortung." },
               { title: "Augenhöhe", text: "Arbeit auf Augenhöhe." }
             ].map((item, i) => (
               <div key={i} className="p-6 bg-accentGreen/5 rounded-3xl border border-accentGreen/10 space-y-2">
                  <span className="block text-[10px] font-black uppercase tracking-widest text-accentBrown">{item.title}</span>
                  <p className="text-sm font-bold text-accentGreen">{item.text}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Sektion: Klare Abgrenzung */}
      <section className="py-24 px-6 bg-accentGreen text-white rounded-[60px] mx-6 my-12">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">Klare Abgrenzung</h2>
            <p className="text-xl opacity-70">Ambulante psychiatrische Pflege ist keine Psychotherapie und ersetzt diese nicht.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
             <div className="bg-white/10 backdrop-blur-md p-10 rounded-[40px] border border-white/10 space-y-6">
                <h3 className="text-2xl font-bold text-white">Psychotherapie</h3>
                <p className="opacity-80 leading-relaxed">
                  Arbeitet an innerpsychischen Prozessen und findet in der Regel in einer Praxis statt. Fokus liegt auf Ursachenforschung und Symptombearbeitung.
                </p>
             </div>
             <div className="bg-white p-10 rounded-[40px] shadow-2xl text-accentGreen space-y-6">
                <h3 className="text-2xl font-bold">Psychiatrische Pflege</h3>
                <p className="text-textDark/70 leading-relaxed">
                  Unterstützt die praktische Umsetzung im Alltag. Schafft Voraussetzungen, damit therapeutische Behandlungen wirksam werden können.
                </p>
                <div className="pt-4 border-t border-gray-100 flex items-center gap-3 text-accentBrown font-bold text-sm uppercase tracking-widest">
                   <div className="w-2 h-2 rounded-full bg-accentBrown"></div>
                   <span>Ergänzende Angebote</span>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Sektion: Einordnung im Gesundheitssystem */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-accentGreen tracking-tight">Einordnung im Gesundheitssystem</h2>
          <div className="space-y-6 text-lg text-textDark/70 leading-relaxed">
            <p>
              Die ambulante psychiatrische Pflege ist Teil der regulären Gesundheitsversorgung im Fürstentum Liechtenstein. Sie erfolgt auf ärztliche Anordnung und ist in den gesetzlichen Rahmen der Krankenpflege eingebettet.
            </p>
            <p className="font-semibold">
              Die Zusammenarbeit mit behandelnden Ärzt:innen und weiteren Fachstellen ist zentraler Bestandteil der Arbeit.
            </p>
          </div>
        </div>
      </section>

      {/* Sektion: Ruhiger Abschluss */}
      <section className="pb-32 px-6 bg-white text-center">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="bg-secondary/40 p-12 md:p-20 rounded-[60px] border border-gray-50 space-y-8">
             <h3 className="text-2xl md:text-4xl font-light text-accentGreen italic leading-tight">
               "Welche Form der Unterstützung sinnvoll ist, hängt immer von der individuellen Situation ab."
             </h3>
             <p className="text-lg text-textDark/60 max-w-2xl mx-auto leading-relaxed">
               Ein klärendes Gespräch kann helfen, den Bedarf einzuordnen und nächste Schritte zu überlegen.
             </p>
             <div className="w-20 h-1 bg-accentBrown mx-auto"></div>
          </div>

          <div className="pt-8">
            <a href="#kontakt" className="inline-block bg-accentGreen text-white px-10 py-5 rounded-2xl font-bold hover:bg-accentBrown transition-all shadow-xl">
              Unverbindlich anfragen
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareAndSupport;
