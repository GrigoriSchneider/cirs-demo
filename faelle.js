const faellejson = {
  faelle: [
    {
      id: 1,
      titel: "CIRS Testmeldung zu Überdosierungen",
      fachgebiet: "Orthopädie",
      altersgruppe: "40-50",
      geschlecht: "unbekannt",
      wo: "leer",
      versorgungsart: "leer",
      "kontext-ereignis": "leer",
      was: "Test CIRSmeldung",
      ergebnis: "leer",
      "gruende-ereignis": "leer",
      "patient-schaden": "leer",
      "faktoren-ereignis": [
        "Kommunikation (im Team, mit Patienten, mit anderen Ärzten etc.)",
        "Persönliche Faktoren des Mitarbeiters (Müdigkeit, Gesundheit, Motivation etc.)",
      ],
      haeufigkeit: "täglich",
      "wer-berichtet": "leer",
      feedback: "",
      verlinkungen: "",
      medien: [""],
      klassifikation: "",
    },
    {
      id: 2,
      titel: "Unterkühlung eines Neugeborenen",
      fachgebiet: "Frauenheilkunde / Geburtshilfe",
      altersgruppe: "0-1",
      geschlecht: "weiblich",
      wo: "Krankenhaus",
      versorgungsart: "Routinebetrieb",
      "kontext-ereignis": "Nichtinvasive Massnahmen (Diagnostik / Therapie)",
      was:
        "SGA 35+SSW, GG 2450gr, Vorgabe durch Neonatologen: Wärmebett, regelmässige Kontrolle Vitalzeichen sowie BZ-Kontrollen (nach Standard); am 2.LT 'trotz Wärmflaschen' (Wärmebett defekt!) Temp. 35,8 Grad, bei Übernahme auf Neo BZ 36!",
      ergebnis:
        "Unterkühlung, Hypo 36!, Magensonde und enterale Glukosegabe, Infektparameter und BGA o.B., Verlaufs beobachtung auf Wochenbett nicht dem gemeinsamen Standard entsprechend (durchgeführt oder dokumentiert?)",
      "gruende-ereignis":
        "WärmeBett im GEBS verordnet, mangels Material auf Wochenbett nicht umgesetzt...Überwachung (lt Standard verordnet) lückenhaft, keine Kommunikation zu Wochenbett-Neonatologen, von diesem nicht aktiv abgefragt/angeschaut, fachliche Unkenntnis?Standard bekannt?",
      "patient-schaden": "Passagerer Schaden leicht - mittel",
      "faktoren-ereignis": [
        "Kommunikation (im Team, mit Patienten, mit anderen Ärzten etc.)",
        "Ausbildung und Training",
        "Teamfaktoren (Zusammenarbeit, Vertrauen, Kultur, Führung etc.)",
        "Organisation (zu wenig Personal, Standards, Arbeitsbelastung, Abläufe etc.)",
        "Technische Geräte (Funktionsfähigkeit, Bedienbarkeit etc.)",
      ],
      haeufigkeit: "monatlich",
      "wer-berichtet": "Arzt / Ärztin, Psychotherapeut/in",
      feedback: "",
      verlinkungen: "",
      medien: [""],
      klassifikation: "",
    },
    {
      id: 3,
      titel: "Laborproben im Kühlschrank vergessen",
      fachgebiet: "anderes Fachgebiet: Geben Sie einen Freitext ein...",
      altersgruppe: "unbekannt",
      geschlecht: "unbekannt",
      wo: "Krankenhaus",
      versorgungsart: "Routinebetrieb",
      "kontext-ereignis": "Organisation (Schnittstellen / Kommunikation)",
      was:
        "Im Kühlschrank gelagerte Laborproben konnten nicht wie geplant bereits am Wochenende ausgewertet werden, da bei Abholung durch einen externen Dienstleister der Inhalt des Kühlschranks nicht berücksichtigt wurde.",
      ergebnis: "Erneute Probenentnahme",
      "gruende-ereignis": "leer",
      "patient-schaden": "nein",
      "faktoren-ereignis": [
        "Kommunikation (im Team, mit Patienten, mit anderen Ärzten etc.)",
        "Organisation (zu wenig Personal, Standards, Arbeitsbelastung, Abläufe etc.)",
      ],
      haeufigkeit: "monatlich",
      "wer-berichtet": "Pflege-, Praxispersonal",
      feedback: "",
      verlinkungen: "",
      medien: [""],
      klassifikation: "",
    },
    {
      id: 4,
      titel: "Patientenidentifikation in großen Krankenhaus-Datenbanken",
      fachgebiet: "Chirurgie",
      altersgruppe: "unbekannt",
      geschlecht: "unbekannt",
      wo: "Krankenhaus",
      versorgungsart: "Routinebetrieb",
      "kontext-ereignis": "Organisation (Schnittstellen / Kommunikation)",
      was:
        "Am Folgetag einer Patientenaufnahme einer dementen Patientin mit Infekt fiel zufällig im Rahmen der Visite auf, dass es sich bei einer Patientin nicht um die Person handelte, deren Patientenunterlagen mitgeführt wurden und als die die Patientin im Rahmen der administrativen Patientenaufnahme aufgenommen wurde. Somit wurde die initiale Therapieplanung und Durchführung auf der Basis von Behandlungsdaten aus einem vorangegangenen Krankenhausaufenthalt einer anderen Patientin durchgeführt.",
      ergebnis:
        "Da aus den Patientenunterlagen eines Voraufenthalts explizit auf eine Antibiotiakallergie für eine bestimmte Antibiotikagruppe hingewiesen wurde, wurde initial eine kombinierte Antibiotikatherapie mit Reservepräparaten eingeleitet. Hieraus sind in diesem Fall der Patientin glücklicherweise keine gesundheitlichen Schäden entstanden.",
      "gruende-ereignis":
        "Seit Einführung der elektronischen Dokumentation patientenbezogener Daten in diversen Datenbanksystemen (KIS) häufen sich identische Einträge in den üblicherweise zur Personenidentifikation genutzten Datenfeldern. Eine Patientendatenbank im Krankenhaus enthält heute leicht mehr als 100.000 Einträge. Die Analyse des geschilderten Falls ergab, dass beispielsweise der Nachname 'Müller' in der KIS-Datenbank beinahe 800 Mal enthalten war. Von diesen 800 Patienten mit dem Nachnamen 'Müller' war in 65 Fällen zusätzlich der Vorname identisch und 3 dieser Patienten waren am exakt gleichen Tag geboren. Somit reicht das bislang oft übliche Patientenidentifikationsverfahren (Nachname, Vorname, Geburtsdatum) definitiv nicht mehr aus, sondern es muss ein Ein-Eindeutiges Identifikationsmerkmal festgelegt und zwingend vor der Aufnahme eines Patienten in ein Datenbanksystem (Anlage eines Behandlungsfalls) nachgewiesen werden (z.B. Personalausweisnummer, Reisepassnummer, Gesundheitskarte so sie denn mal kommt, etc.). Die komfortable Möglichkeit Daten bereits im System vorhandener Patienten für die Neuanlage eines Behandlungsfalls zu übernehmen ist ein Hochrisikoprozess. Schulungsmaßnahmen für sämtliche Mitarbeiter, die administrative Patientenaufnahmen durchführen und eine Sensibilisierung aller Mitarbeiter für die Problematik sind erforderlich.",
      "patient-schaden": "nein",
      "faktoren-ereignis": [
        "Teamfaktoren (Zusammenarbeit, Vertrauen, Kultur, Führung etc.)",
        "Patientenfaktoren (Sprache, Einschränkungen, med. Zustand etc.)",
        "Technische Geräte (Funktionsfähigkeit, Bedienbarkeit etc.)",
        "Kontext der Institution (Organisation des Gesundheitswesens etc.)",
      ],
      haeufigkeit: "erstmalig",
      "wer-berichtet": "Arzt / Ärztin, Psychotherapeut/in",
      feedback: "",
      verlinkungen: "",
      medien: [""],
      klassifikation: "",
    },
    {
      id: 5,
      titel: "Probleme bei der Nutzung eines Krankenhausinformationssystems",
      fachgebiet: "Notaufnahme",
      altersgruppe: "leer",
      geschlecht: "leer",
      wo: "Krankenhaus",
      versorgungsart: "Routinebetrieb",
      "kontext-ereignis": "Aufnahme",
      was:
        "In der Patientenliste des Krankenhausinformationssystems der Fa. Siemens stimmt der unterlegte (gekennzeichnete) Patient (einfacher Klick) nicht immer mit dem ausgewählten Patienten (Doppelklick) in der oberen Zeile überein. Diie entsprechende Anzeige oberhalb wurde dann nicht genau beachtet, da man es von anderen EDV-Programmen anders gewöhnt ist. Hierdurch wurden Laboruntersuchungen und der Druck des Patientenidentifikationsarmbandes zum falschen Patienten angefordert.",
      ergebnis:
        "Die Verwechslung fiel durch die routinemäßige Identifikation der Daten des Patientenarmbandes durch den Patienten auf. Dadurch konnten auch die Laborwerte korrekt angefordert werden.",
      "gruende-ereignis":
        "Das Programm muss sicherstellen, dass der gekennzeichnete Patient (farblich hinterlegt) auch der ausgewählte Patient ist.",
      "patient-schaden": "nein",
      "faktoren-ereignis": [
        "Persönliche Faktoren des Mitarbeiters (Müdigkeit, Gesundheit, Motivation etc.)",
        "Organisation (zu wenig Personal, Standards, Arbeitsbelastung, Abläufe etc.)",
        "Technische Geräte (Funktionsfähigkeit, Bedienbarkeit etc.)",
      ],
      haeufigkeit: "erstmalig",
      "wer-berichtet": "andere Berufsgruppe",
      feedback:
        "Das gemeldete Verhalten ist nicht fehlerhaft, sondern es entspricht dem Standard in vielen gängigen SW-Produkten und resultiert aus dem Nutzungsangebot (Feature) dieser Produkte, mehrere Objekte auszuwählen (Multi-Selektion), um dann mit diesen Objekten eine Aktion auszuführen. Diese Möglichkeit wird, ebenfalls in vielen anderen SW-Produkten, kombiniert mit einer Vorschau-Funktion (Preview), und daraus ergibt sich der folgende Darstellungskonflikt: wenn einerseits aus einer Liste mehrere Objekte ausgewählt werden können, aus Platz- und Performanzgründen aber immer nur eines dieser Objekte in einem Vorschaubereich darstellbar ist, kann es zunächst keine ein-eindeutige Zuordnung aus Selektion zu Vorschau geben. Diese Erfahrung lässt sich auf der Basis etwa von den Microsoft Office - Applikationen Outlook und Datenexplorer machen. Der Vorschaubereich in Outlook stellt auch nach einer Multiselektion weiterhin die zuerst ausgewählte Mail dar, zugleich sind aber mehrere Mails als selektiert farblich markiert. Der Datenexplorer erlaubt eine Multiselektion kombiniert mit einer Vorschau nicht, so dass es hier zu keinen Mehrdeutigkeiten kommen kann. Die Nutzer eines KIS erwarten die Ausprägung von Interaktions- und Darstellungsfunktionen, die sie von etablierten SW-Standards her kennen. Und sie erwarten ein Funktionsangebot, das sie in ihrer Arbeitsweise flexibel unterstützt. Daher haben wir uns entschieden, das unter der Nummer 28206 angezeigte Verhalten zu implementieren und trotz der Bedenken der meldenden Stelle auch beizubehalten. Nun unterliegt ein KIS aber aufgrund möglicher Patientengefährdungen besonders hohen Qualitätsanforderungen. Diesen werden wir unseres Erachtens ausreichend gerecht, indem wir die Selektionsbezüge farblich unterscheiden, den Patientennamen gegebenenfalls in der Vorschau wiederholen und dieses Verhalten jeweils systemweit einheitlich penetrieren, so dass sich ein Nutzer dessen sehr schnell bewusst wird und die Anzeige entsprechend interpretiert. Zur Bediensicherheit trägt es überdies generell bei, ein weltweit etabliertes Systemverhalten auch im KIS anzuwenden. Der hier angezeigte Fall wurde unserer Firma schon vor längerer gemeldet, erneut gem. unseres Qualitätsmanagementssystems überprüft, dem Kunden eine unmittelbare Rückmeldung gegeben und der Vorgang dokumentiert. Ein Patientenschaden, resultierend aus dem gemeldeten Verhalten, ist nicht bekannt. Zu weiteren Maßnahmen sehen wir aus den genannten Gründen keine Veranlassung, ermutigen aber unsere Nutzer und Kunden, sich auch zukünftig mit aufkommenden Bedenken an uns zu wenden.",
      verlinkungen: "",
      medien: [""],
      klassifikation: "",
    },
    {
      id: 6,
      titel: "Neuer Ambu-Beutel muss vor Verwendung zusammengebaut werden",
      fachgebiet: "Intensivmedizin",
      altersgruppe: "leer",
      geschlecht: "leer",
      wo: "Krankenhaus",
      versorgungsart: "Notfall",
      "kontext-ereignis": "Invasive Massnahmen (Diagnostik / Therapie)",
      was:
        "Die Einmal-Ambu-Beutel waren bisher zusammengebaut. Die aktuell Gelieferten Ambu-Beutel müssen vor der Benutzung zusammengebaut werden. Im Rahmen einer notfallmäßigen Intubation musste das System erst zusammengebaut werden, was zu einer Verzögerung in dieser Situation geführt hat. Es erfolgte keine Verständigung durch den Einkauf oder der Firma, dass eine Veränderung des Produktes erfolgte.",
      ergebnis: "Anhand der schnellen Reaktion erfolgreiche Intubation.",
      "gruende-ereignis":
        "Information durch den Hersteller an den Einkauf, Info vom Einkauf an die Anwender.",
      "patient-schaden": "nein",
      "faktoren-ereignis": ["sonstiges: fehlende Information"],
      haeufigkeit: "erstmalig",
      "wer-berichtet": "Pflege-, Praxispersonal",
      feedback: "",
      verlinkungen: "",
      medien: [""],
      klassifikation: "",
    },
    {
      id: 7,
      titel: "Beinahe i.v. Zugang mit Magensonde verwechselt",
      fachgebiet: "anderes Fachgebiet",
      altersgruppe: "unbekannt",
      geschlecht: "unbekannt",
      wo: "Krankenhaus",
      versorgungsart: "Routinebetrieb",
      "kontext-ereignis": "Nichtinvasive Massnahmen (Diagnostik / Therapie)",
      was:
        "Patient hat mehr als zwei Zugänge (Magensonde, ZVK und Arterie). Beinahe wäre die orale Applikation i.v. gegeben worden.",
      ergebnis: "rechtzeitig aufgefallen --> interne CIRS-Meldung erfolgt",
      "gruende-ereignis":
        "In der 'normalen' Arbeit kann es schnell zu einer Verwechslung von mehreren Zugängen kommen. Hier wurde daraufhin eine Verfahrensanweisung verabschiedet in der eine Kennzeichnung ab dem 2. Zugang der verschiedenen Zugänge durch signalfarbende Etiketten an den Zuspritzvorrichtungen erfolgt.Der Fall wurde im hausinternen CIRS analysiert und soll mit der Weiterleitung ans KH-CIRS-Netz-D anderen Kliniken weiterhelfen.Die Umsetzung erfolgte vor 1,5 Jahren, die Maßnahme wird von den Kollegen als gut empfunden und bislang keine weiteren Beinaheverwechslungen aufgetreten.",
      "patient-schaden": "nein",
      "faktoren-ereignis": [
        "Persönliche Faktoren des Mitarbeiters (Müdigkeit, Gesundheit, Motivation etc.)",
      ],
      haeufigkeit: "monatlich",
      "wer-berichtet": "andere Berufsgruppe",
      feedback:
        "Zu diesem bekannten Problem möchten wir auf folgende Veröffentlichungen hinweisen 'CIRS-AINS Spezial: ,Achtung LUER-Anschluss!‘ Das Problem der Luer-Anschluss-Verwechslungen im Spiegel des CIRSmedical Anästhesiologie' (Z. Evid. Fortbild. Qual. Gesundh. wesen 105 (2011) 67–69).Diese Publikation können Sie anbei lesen und herunterladen. Sie befasst sich mit Verwechslungen und Verkantungen von Luer-Anschlüssen.Quick-Alert Nr. 23 Fehlapplikationen über Luer-Lock Anschlüsse der Stiftung Patientensicherheit (Schweiz) (pdf).",
      verlinkungen: "",
      medien: [
        "https://cirsmedical.ch/cirsdemo/m_files/mediaviewer/mediaviewer.php?recid=1242&formnr=1100AEZQP",
      ],
      klassifikation: "",
    },
    {
      id: 8,
      titel: "Patient in falschen OP eingeschleust",
      fachgebiet: "anderes Fachgebiet",
      altersgruppe: "unbekannt",
      geschlecht: "unbekannt",
      wo: "OP",
      versorgungsart: "Routinebetrieb",
      "kontext-ereignis": "Invasive Massnahmen (Diagnostik / Therapie)",
      was:
        "Falscher Pat. wurde versehentlich bereits zum OP gebracht, Patientenidentifkation etc. war 'erfolgreich'. Pat. wurde eingeschleust. Behandelnder Arzt griff ein, da eine Patientenverwechslung vorlag.",
      ergebnis: "Patient wurde ausgeschleust (nichts passiert)",
      "gruende-ereignis":
        "Umstrukturierung der Prozesse (der Eingriff fand bis 2 Wochen vorher noch im OP statt). Personal ist selten in diesem Bereich eingesetzt (Springerpool).Patientenidentifikation fand anhand der Patientenunterlagen statt :-( (da sich das OP-Programm häufig ändert).Der Fall wurde breit in der Klinik (anonym etc.) kommuniziert --> Sensibiliserung bei Unklarheiten etc. immer zu fragen. Patientenidentifikation zudem im OP per offener Frage (jedoch wäre in diesem Fall der Patient auch eingeschleust worden, daher wurden PC-Monitore in den Schleusen angebracht, damit dort die aktuellen OPs inkl. Patientennamen seitens der ANÄ/OP-Personal eingesehen werden können)",
      "patient-schaden": "nein",
      "faktoren-ereignis": [
        "Kommunikation (im Team, mit Patienten, mit anderen Ärzten etc.)",
        "sonstiges: Umstrukturierung von Prozessen",
      ],
      haeufigkeit: "leer",
      "wer-berichtet": "andere Berufsgruppe",
      feedback:
        "Bei diesem Bericht ist es leider nicht ganz klar, was genau passiert ist.",
      verlinkungen: "",
      medien: [""],
      klassifikation: "",
    },
    {
      id: 9,
      titel: "Tablette mit Blister verschluckt",
      fachgebiet: "leer",
      altersgruppe: "leer",
      geschlecht: "leer",
      wo: "Krankenhaus",
      versorgungsart: "Routinebetrieb",
      "kontext-ereignis": "Nichtinvasive Massnahmen (Diagnostik / Therapie)",
      was:
        "Der Patient hatte einen Schlaganfall mit fortbestehender Sehschwäche, war sonst noch geistig fit und wegen einer geplanten OP im Krankenhaus. Nun erhielt er seine Tablette noch im Blister verpackt in einem Schächtelchen (d.h. aus einem Tabletten-Blister mit mehreren Tabletten wurde eine Tablette herausgeschnitten). Der Patient bemerkte nach dem Schlucken eine Irritation im Hals und ein 'Fremdkörpergefühl', welches sich im Verlauf etwas besserte.",
      ergebnis:
        "Endoskopisch fanden wir den Tabletten Blister (d.h. Tablette noch in einem ausgeschnittenen viereckigen Teil der Aluminiumverpackung, siehe Foto) in der Trachea. Es wurde von dort endoskopisch entfernt. Die Endoskopie fand unter Notfallbedingungen statt.",
      "gruende-ereignis":
        "Der Fall wurde bereits in der Krankenhausbetriebsleitung diskutiert, aber man fand keine Lösung.Aus hygienischen Gründen bzw. vielleicht auch aus Personalmangel oder Sparsamkeit (so können Tabletten wieder verwendet werden, falls der Patient geht) werden die Tabletten weiter in Form von Blister gestellt, demente Patienten sollen die Tabletten dann aber erst durch die Pflegekraft erhalten. Ähnliche Ereignisse sind mir auch aus anderen Krankenhäusern bekannt. Wer weiss eine bessere Lösung ? Manche Krankenhäuser bekommen ihre Tabletten von einer Apotheke gerichtet, dies scheint sich jedoch doch nicht durchzusetzen.",
      "patient-schaden": "leer",
      "faktoren-ereignis": [
        "Patientenfaktoren (Sprache, Einschränkungen, med. Zustand etc.)",
        "Medikation (Medikamente beteiligt?)",
      ],
      haeufigkeit: "leer",
      "wer-berichtet": "Arzt / Ärztin, Psychotherapeut/in",
      feedback:
        "Tabletten in ausgeschnittenen Blisterverpackungen fördern die Sicherheit in folgenden Situationen: Die Pflegekraft, die die Medikamente austeilt, kann erkennen und kontrollieren, welche Medikamente gestellt wurden. Der/die Patient/in kann erkennen und kontrollieren welche Medikamente er/sie erhält. Allerdings müssen bei Patienten mit Sehbehinderungen, Einschränkungen der Feinmotorik oder einer Einschränkung der geistigen Fähigkeiten die Tabeltten ausgepackt werden. Dieser Umstand muss bei der Planung des Prozesses 'Tablettengabe' eingeplant und entsprechend umgesetzt werden. Foto zum Bericht im Anhang",
      verlinkungen: "",
      medien: [
        "https://cirsmedical.ch/cirsdemo/m_files/mediaviewer/mediaviewer.php?recid=1241&formnr=1100AEZQP",
      ],
      klassifikation: "",
    },
    {
      id: 10,
      titel: "Überdosierung Medikament: 3x25mg oder 3x75mg?",
      fachgebiet: "Neurologie",
      altersgruppe: "41-50",
      geschlecht: "weiblich",
      wo: "Rehabilitation",
      versorgungsart: "Routinebetrieb",
      "kontext-ereignis": "Organisation (Schnittstellen / Kommunikation)",
      was:
        "Pat. nimmt von einem Medikament 3x25mg am Abend. Schwester 1 richtet deshalb das Medikament in Höhe von 75mg für den Patienten her. Schwester 2 gibt später 7 Tabletten a 75mg an die Pat. aus, die er selbstständig einnehmen kann. Die Schwester 2 hat zuvor nicht nochmals die Höhe der Dosis kontrolliert und die. Pat darüber informiert, dass dies eine höhere Dosis ist, da sie es selbst nicht weiß. Die Pat. nimmt anschließend 3x75mg ein.",
      ergebnis: "Pat. musste für mehrere Stunden überwacht werden.",
      "gruende-ereignis":
        "schlechte Kommunikation zw. den Kollegen,Unachtsamkeit der Schwester, die die Medikamente an den Pat. ausgehändigt hat.",
      "patient-schaden": "nein",
      "faktoren-ereignis": [
        "Kommunikation (im Team, mit Patienten, mit anderen Ärzten etc.)",
      ],
      haeufigkeit: "erstmalig",
      "wer-berichtet": "Pflege-, Praxispersonal",
      feedback:
        "Bei diesem Bericht ist leider unklar, warum der Patient 3x25mg erhält und nicht einfach 75mg. Außerdem ist es nicht klar, ob dem Patienten mitgeteilt wurde, welche Tabletten er erhält.",
      verlinkungen: "",
      medien: [""],
      klassifikation: "",
    },
    {
      id: 11,
      titel: "Übergabe bei Personalwechsel",
      fachgebiet: "Orthopädie",
      altersgruppe: "unbekannt",
      geschlecht: "unbekannt",
      wo: "Krankenhaus",
      versorgungsart: "leer",
      "kontext-ereignis": "Invasive Massnahmen (Diagnostik / Therapie)",
      was:
        "Patient erhielt im Frühdienst ein Plasmakonzentrat über einen peripheren Zugang. Bei der Übergabe wurde diese Information nicht weitergegeben. Das Konzentrat wurde im Frühdienst nicht abgemacht. Bei der ersten Runde des Spätdienstes am Nachmittag wurde die Transfusion dann abgemacht.",
      ergebnis:
        "Der periphere Zugang war geschlossen (durch diverse Blutgerinnsel) und musste gezogen werden.",
      "gruende-ereignis":
        "Defizite in der Übergabe bzw. Personal war ca. 3 Stunden nicht im Zimmer des Patienten.",
      "patient-schaden": "Minimaler Schaden / Verunsicherung des Patienten",
      "faktoren-ereignis": [
        "Kommunikation (im Team, mit Patienten, mit anderen Ärzten etc.)",
        "Persönliche Faktoren des Mitarbeiters (Müdigkeit, Gesundheit, Motivation etc.)",
        "Teamfaktoren (Zusammenarbeit, Vertrauen, Kultur, Führung etc.)",
        "Organisation (zu wenig Personal, Standards, Arbeitsbelastung, Abläufe etc.)",
        "Patientenfaktoren (Sprache, Einschränkungen, med. Zustand etc.)",
      ],
      haeufigkeit: "monatlich",
      "wer-berichtet": "Pflege-, Praxispersonal",
      feedback:
        "Elemente dieses Standards solten sein:Anwendung der SBAR Methode (Situation-Hintergrund-Bewertung-Empfehlung) (u.a. klare Inhalte der Übergabe)Bereitstellung von genügend Zeit für die Übergabe (z.B. keine Unterbrechungen, festgelegter Ort und Zeitpunnkt) Möglichkeit für Rückfragen und deren Beantwortung Bereitstellung von Informationen über den Patienten: Klinische Situation, Medikamente, Behandlungsplan, Patientenverfügungen, wichtigen Veränderungen seiner klinischen Situation. Begrenzung des Informationsaustausches auf notwendige Informationen.",
      verlinkungen: "",
      medien: [
        "http://www.ccforpatientsafety.org/Common/pdfs/fpdf/ICPS/PatientSolutionsGerman.pdf",
      ],
      klassifikation: "",
    },
    {
      id: 12,
      titel: "Ähnliche Verpackungen Losartan Comp / Enalapril Comp",
      fachgebiet: "Innere Medizin",
      altersgruppe: "unbekannt",
      geschlecht: "unbekannt",
      wo: "Krankenhaus",
      versorgungsart: "Routinebetrieb",
      "kontext-ereignis": "Medikamentenbereitstellung",
      was:
        "Die Verpackung von Losartan (Herstellername) comp und Enalapril (Herstellername) comp ist nahezu identisch. Es besteht die Gefahr einer Verwechslung.",
      ergebnis: "leer",
      "gruende-ereignis": "leer",
      "patient-schaden": "nein",
      "faktoren-ereignis": ["Medikation (Medikamente beteiligt?)"],
      haeufigkeit: "leer",
      "wer-berichtet": "Pflege-, Praxispersonal",
      feedback:
        "In diesem Fall wurde der Hersteller der Medikamente (Hersteller wurde im Originalbericht genannt) benachrichtigt. Dieser sieht jedoch durch teilweise unterschiedliche Farbgebung der Verpackung und Beschriftung keine Verwechslungsgefahr und widerspricht der Veröffentlichung des Produktnamens und zugehöriger Originalbilder. Um die Ähnlichkeit von handelsüblichen Medikamentenverpackungen zu veranschaulichen, wurde die unten angehängte Zeichnung der Verpackungen der beiden genannten Medikamente (Losartan und Enalapril) erstellt. Anhand dieser Zeichung, kann man sich vorstellen, dass eine Verwechslung einfach möglich ist. 2008 veröffentlichte die National Patient Safety Agency den Leitfaden: 'Design for patient safety: a guide to the labelling and packaging of injectable medicines. Darin wird illustriert wie Graphikdesign genutzt werden kann, um das aktuelle Verpackungsdesign von Medikamenten zu verändern bzw. zu verbessern und so sicherer zu machen.'",
      verlinkungen: "",
      medien: ["http://www.nrls.npsa.nhs.uk/resources/?entryid45=59831"],
      klassifikation: "",
    },
  ],
};

// Funktion, um die Tabelle mit den Fällen zu befüllen
function baueFallTabelle(faelle = faellejson.faelle) {
  const tabelle = document
    .getElementById("fallTabelle")
    .getElementsByTagName("tbody")[0];
  tabelle.innerHTML = ""; // Vorherige Ergebnisse löschen

  // Iteration über die JSON-Daten oder gefilterte Daten
  faelle.forEach((fall) => {
    const zeile = document.createElement("tr");

    const fallnrZelle = document.createElement("td");
    fallnrZelle.textContent = fall.id;
    zeile.appendChild(fallnrZelle);

    const titelZelle = document.createElement("td");
    titelZelle.textContent = fall.titel;
    zeile.appendChild(titelZelle);

    const klassifikationZelle = document.createElement("td");
    klassifikationZelle.textContent =
      fall.klassifikation || "Keine Klassifikation";
    zeile.appendChild(klassifikationZelle);

    const feedbackZelle = document.createElement("td");
    feedbackZelle.textContent = "Hat Feedback" || "Kein Feedback";
    zeile.appendChild(feedbackZelle);

    // Füge einen Klick-Listener hinzu, um das Modal anzuzeigen
    zeile.addEventListener("click", () => zeigeFallDetails(fall));

    // Füge die Zeile in das Tabellen-Body ein
    tabelle.appendChild(zeile);
  });
}

// Funktion, um die Details eines Falls anzuzeigen
function zeigeFallDetails(fall) {
  const modal = document.getElementById("fallDetailsModal");
  const tabelle = document.getElementById("fallDetailsTabelle");

  // Bereinige den Inhalt der Tabelle
  tabelle.innerHTML = "";

  // Erstelle Zeilen für jedes Detail des Falls
  for (const key in fall) {
    if (fall.hasOwnProperty(key)) {
      const zeile = document.createElement("tr");

      const keyZelle = document.createElement("th");
      keyZelle.textContent = key.charAt(0).toUpperCase() + key.slice(1);
      zeile.appendChild(keyZelle);

      const wertZelle = document.createElement("td");
      wertZelle.textContent = Array.isArray(fall[key])
        ? fall[key].join(", ")
        : fall[key] || "Keine Daten";
      zeile.appendChild(wertZelle);

      tabelle.appendChild(zeile);
    }
  }

  // Zeige das Modal an
  modal.style.display = "block";
}

// Funktion zum Schließen des Modals
const modal = document.getElementById("fallDetailsModal");
const span = document.getElementsByClassName("close")[0];

// Schließt das Modal, wenn der Nutzer auf das "X" klickt
span.onclick = function () {
  modal.style.display = "none";
};

// Schließt das Modal, wenn der Nutzer außerhalb des Modals klickt
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Ruf die Funktion auf, sobald die Seite geladen ist
window.onload = function () {
  baueFallTabelle();
};

// Funktion, um die Suche zu starten
function sucheFaelle() {
  // Eingaben aus dem Formular abrufen
  const fallnr = document.getElementById("fallnr").value.toLowerCase();
  const fachgebiet = document.getElementById("fachgebiet").value.toLowerCase();
  const wo = document.getElementById("wo").value.toLowerCase();
  const kontext = document.getElementById("kontext").value.toLowerCase();
  const titel = document.getElementById("titel").value.toLowerCase();
  const klassifikation = document
    .getElementById("klassifikation")
    .value.toLowerCase();
  const faktoren = document.getElementById("faktoren").value.toLowerCase();
  const ereignisTyp = document
    .getElementById("ereignistyp")
    .value.toLowerCase();
  const schlagwort = document.getElementById("schlagwort").value.toLowerCase();
  const freitext = document.getElementById("freitext").value.toLowerCase();

  // Filtere die Fälle basierend auf den Eingaben
  const gefilterteFaelle = faellejson.faelle.filter((fall) => {
    return (
      (!fallnr || fall.id.toString().includes(fallnr)) &&
      (!fachgebiet || fall.fachgebiet.toLowerCase().includes(fachgebiet)) &&
      (!wo || fall.wo.toLowerCase().includes(wo)) &&
      (!kontext || fall["kontext-ereignis"].toLowerCase().includes(kontext)) &&
      (!titel || fall.titel.toLowerCase().includes(titel)) &&
      (!klassifikation ||
        fall.klassifikation?.toLowerCase().includes(klassifikation)) &&
      (!faktoren ||
        fall["faktoren-ereignis"].some((f) =>
          f.toLowerCase().includes(faktoren)
        )) &&
      (!ereignisTyp || fall.ereignisTyp?.toLowerCase().includes(ereignisTyp)) &&
      (!schlagwort || fall.schlagwort?.toLowerCase().includes(schlagwort)) &&
      (!freitext ||
        fall.titel.toLowerCase().includes(freitext) ||
        fall.wo.toLowerCase().includes(freitext) ||
        fall.fachgebiet.toLowerCase().includes(freitext))
    );
  });

  // Zeige die Ergebnisse in der Tabelle an
  baueFallTabelle(gefilterteFaelle);
}

// Funktion zum Zurücksetzen der Tabelle
function resetTabelle() {
  // Zeige die ursprünglichen Fälle in der Tabelle an
  baueFallTabelle();
}

// Eventlistener für das Formular
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault(); // Verhindert, dass das Formular tatsächlich gesendet wird
  sucheFaelle(); // Startet die Suche
});
