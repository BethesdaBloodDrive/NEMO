document.addEventListener('DOMContentLoaded', () => {
    // Search Bar Functionality
    const searchBar = document.getElementById('deck-search');
    const decks = document.querySelectorAll('.deck');

    searchBar.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        decks.forEach(deck => {
            const deckName = deck.getAttribute('data-name').toLowerCase();
            if (deckName.includes(query)) {
                deck.style.display = 'block';
            } else {
                deck.style.display = 'none';
            }
        });
    });

    // Flashcard Data
    const flashcardData = {
        medical: [
            { question: "What is the primary function of the heart?", answer: "To pump blood throughout the body." },
            { question: "What are the signs of a stroke?", answer: "Facial drooping, arm weakness, speech difficulty." }
        ],
        trauma: [
    { question: "What is the motor GCS criterion for Category Alpha trauma?", answer: "Motor GCS less than 6: Adult patients unable to follow commands or pediatric patients without spontaneous or purposeful movement." },
    { question: "What are the SBP criteria for Category Alpha trauma?", answer: "Age ≥ 65: SBP less than 110 mmHg.\n10–64 years: SBP less than 90 mmHg.\nUnder 10 years: SBP less than 70 + 2 × (age in years) mmHg." },
    { question: "What is the heart rate criterion for Category Alpha trauma?", answer: "Heart rate greater than SBP for patients ≥ 10 years old." },
    { question: "What is the respiratory rate criterion for Category Alpha trauma?", answer: "Respiratory rate less than 10 or greater than 29 (less than 20 in infants under 1 year old) or need for ventilatory support." },
    { question: "What is the pulse oximetry criterion for Category Alpha trauma?", answer: "Pulse oximetry less than 90%." },
    { question: "What is the transport protocol for Category Alpha trauma?", answer: "Transport to trauma center or specialty center per protocol.\nIf age less than 15 years, transport to a pediatric trauma center.\nAfter trauma team alert, consider helicopter transport if quicker and clinically beneficial." },
    { question: "What injuries qualify as Category Bravo trauma?", answer: "2 or more proximal long-bone fractures.\nAmputation proximal to wrist or ankle.\nChest wall instability or deformity (e.g., flail chest).\nCrushed, degloved, mangled, or pulseless extremity.\nOpen or depressed skull fracture." },
    { question: "What penetrating injuries are included in Category Bravo trauma?", answer: "Penetrating injuries to head, neck, torso, or extremities proximal to elbow and knee." },
    { question: "What additional injuries are included in Category Bravo trauma?", answer: "Pelvic fracture.\nSuspected spinal injury with new motor or sensory loss.\nActive bleeding requiring a tourniquet or wound packing with pressure." },
    { question: "What is the transport protocol for Category Bravo trauma?", answer: "Transport to trauma center or specialty center per protocol.\nIf age less than 15 years, transport to a pediatric trauma center.\nAfter trauma team alert, consider helicopter transport if quicker and clinically beneficial." },
    { question: "What high-risk auto crash mechanisms are included in Category Charlie trauma?", answer: "Intrusion (including roof) greater than 12 inches in occupant site or greater than 18 inches at any site.\nEjection (partial or complete) from vehicle.\nDeath in same passenger compartment.\nVehicle telemetry data consistent with high risk of injury." },
    { question: "What external mechanisms are included in Category Charlie trauma?", answer: "Exposure to blast or explosion.\nFall from height greater than 10 feet (all ages).\nHigh-risk auto crash:\nRollover without restraint.\nAuto vs. pedestrian/bicyclist thrown, run over, or with significant (> 20 mph) impact.\nMotorcycle crash > 20 mph.\nRider separated from transport vehicle with significant impact (e.g., motorcycle, ATV, horse, watercraft, etc.)." },
    { question: "What is the transport protocol for Category Charlie trauma?", answer: "Transport to trauma center.\nConsider pediatric trauma center if age less than 15 years.\nClosest appropriate trauma/specialty center shall go by ground unless there are extenuating circumstances.\nConsider helicopter transport if clinically beneficial." },
    { question: "What are the age and mechanism considerations for Category Delta trauma?", answer: "Older adults (greater than 55 years old).\nPediatric patients (less than 5 years old).\nLow-impact mechanisms (e.g., ground-level falls) resulting in severe injury.\nEMS clinical judgment." },
    { question: "What special conditions qualify for Category Delta trauma?", answer: "Head injury with associated anticoagulant use or bleeding disorders.\nBurns:\nWithout trauma mechanism, triage to burn center.\nWith trauma mechanism, triage to trauma center.\nPregnancy greater than 20 weeks." },
    { question: "What is the transport protocol for Category Delta trauma?", answer: "Transport to trauma center.\nConsider medical direction if uncertain.\nTransport to a pediatric trauma center if age less than 15 years.\nPatients within a 30-minute drive to the closest trauma/specialty center should go by ground unless there are extenuating circumstances.\nConsider helicopter transport if clinically beneficial." },
    { question: "What should you do if no trauma criteria are met?", answer: "Evaluate for other considerations, including high-energy impacts or mechanisms of injury, before deciding on transport." }
]
,
      pharmacology: [
        { question: "What are the indications for administering acetaminophen in BLS?", answer: "Patients 3 months of age and older with:\nMild to moderate discomfort (e.g., 1–5 on FACES scale).\nFever (EMS-documented temperature ≥100.4°F or 38°C)." },
        { question: "What are the adverse effects of acetaminophen?", answer: "Not clinically significant." },
        { question: "What precautions should be considered when administering acetaminophen?", answer: "Acetaminophen does not replace the need for transport to a facility for a comprehensive evaluation of pain causes.\nUse a 3 mL, 5 mL, or 6 mL syringe to measure doses." },
        { question: "What are the contraindications for acetaminophen?", answer: "Head injury.\nHypotension.\nUse of acetaminophen or acetaminophen-containing medications within the last 4 hours.\nInability to swallow or take oral medications.\nRespiratory distress.\nPersistent vomiting.\nKnown or suspected liver disease (including current alcohol ingestion).\nAllergy to acetaminophen.\nPatients younger than 3 months." },
        { question: "What types of acetaminophen preparations are approved for BLS use?", answer: "Unit dose only.\nLiquid: 160 mg/5 mL.\nPill/Tablet: 325 mg." },
        { question: "What dosage is recommended for patients less than 3 months of age?", answer: "Acetaminophen is not indicated for patients under 3 months old." },
        { question: "What is the recommended liquid dose for patients aged 3 months to 2 years?", answer: "3–11 months: 1.25 mL to 2.5 mL of 160 mg/5 mL liquid.\n12–23 months: 3.75 mL of 160 mg/5 mL liquid." },
        { question: "What is the standard unit dose for acetaminophen in patients aged 2–4 years?", answer: "One unit dose of 160 mg/5 mL liquid." },
        { question: "What is the recommended dose for patients aged 5–12 years?", answer: "Two unit doses of 160 mg/5 mL liquid (totaling 320 mg/10 mL)." },
        { question: "What is the recommended dose for patients aged 13 years and above?", answer: "Four unit doses of 160 mg/5 mL liquid (totaling 640 mg/20 mL), or\nOne 325 mg pill/tablet x2 (total 650 mg)." },
        { question: "What is the indication for administering Activated Charcoal?", answer: "Poisoning by mouth." },
        { question: "What are the adverse effects of Activated Charcoal?", answer: "May indirectly induce vomiting.\nCan cause nausea." },
        { question: "What precaution should be considered when administering Activated Charcoal?", answer: "Activated Charcoal does not adsorb all drugs and toxic substances." },
        { question: "What are the contraindications for Activated Charcoal?", answer: "Altered mental status.\nPatients who have received an emetic." },
        { question: "What are the available preparations of Activated Charcoal?", answer: "25 grams/125 mL bottle.\n50 grams/250 mL bottle." },
        { question: "What is the dosage for Activated Charcoal?", answer: "Adults: Administer 1 gram/kg PO.\nPediatrics: Administer 1 gram/kg PO." },
        { question: "What additional guidance is provided for using Activated Charcoal?", answer: "Poison Information Center recommendations should be solicited in conjunction with medical consultation.\nMedication orders can only be accepted from an approved base station or consultation center." },
        { question: "What are the trade names for Albuterol?", answer: "Proventil® and Ventolin®." },
        { question: "What are the indications for Albuterol?", answer: "Signs and symptoms of respiratory distress.\nBronchospasm/wheezing associated with:\nAsthma.\nCOPD/emphysema.\nAllergic reactions (anaphylaxis)." },
        { question: "What are the adverse effects of Albuterol?", answer: "Tachycardia/palpitations.\nHypertension.\nAngina.\nNervousness/anxiety.\nTremors.\nDizziness.\nHeadache.\nSweating.\nNausea/vomiting.\nSore throat." },
        { question: "What precaution should be considered with Albuterol?", answer: "Repeated excessive use may cause severe bronchospasm." },
        { question: "What is the contraindication for Albuterol?", answer: "Known hypersensitivity." },
        { question: "What are the available preparations of Albuterol?", answer: "Hand-held (unit dose) aerosol inhaler.\nAmpule for nebulizer." },
        { question: "What is the dosage for Albuterol via inhaler?", answer: "Adult: Maximum of 2 doses (4 puffs) over a 30-minute period.\nPediatric: Maximum of 2 doses (4 puffs) over a 30-minute period." },
        { question: "What is the dosage for Albuterol via nebulizer?", answer: "Adult: 2.5 mg nebulized aerosol connected to 6–8 lpm of oxygen; may repeat one time.\nPediatric:\nAge 2 or older: 2.5 mg nebulized aerosol connected to 6–8 lpm of oxygen; may repeat one time.\nAge less than 2 years: 1.25 mg nebulized aerosol connected to 6–8 lpm of oxygen; may repeat one time.\nAdditional doses may be administered with medical consultation." },
		{ question: "What are the pharmacological properties of Aspirin?", answer: "Platelet inhibitor.\nAnti-inflammatory." },
        { question: "What is the pharmacokinetic action of Aspirin?", answer: "Blocks platelet aggregation." },
        { question: "What are the indications for administering Aspirin?", answer: "Suspected Acute Coronary Syndrome (ACS).\nST Elevation Myocardial Infarction (STEMI)." },
        { question: "What are the contraindications for Aspirin?", answer: "Known hypersensitivity.\nPatients who have already received a full dose (324 mg) of Aspirin prior to EMS arrival." },
        { question: "What are the adverse effects of Aspirin?", answer: "Heartburn.\nNausea and vomiting.\nWheezing." },
        { question: "What precaution should be taken when administering Aspirin?", answer: "Be cautious of gastrointestinal (GI) bleeding and upset." },
        { question: "What is the dosage for Aspirin?", answer: "Adult: 324 mg or 325 mg chewed.\nPediatric: Not indicated." },
        { question: "What are the indications for Epinephrine (1 mg/mL)?", answer: "Moderate to severe allergic reaction with respiratory distress or mild allergic reaction with a history of life-threatening allergic reaction.\nPatients with severe asthma." },
        { question: "What are the adverse effects of Epinephrine?", answer: "Tachycardia/palpitations.\nAngina.\nHeadache.\nNausea/vomiting.\nDizziness.\nHypertension.\nNervousness/anxiety.\nTremors." },
        { question: "What precautions should be taken with Epinephrine?", answer: "Medical consultation must be obtained before administering Epinephrine to asthma patients with pregnancy or cardiac history.\nMedical consultation is not required for patients with severe allergic reactions and respiratory distress." },
        { question: "What are the contraindications for Epinephrine?", answer: "There are no contraindications in the presence of anaphylaxis." },
        { question: "What are the available preparations for Epinephrine?", answer: "Vial: 1 mg in 1 mL.\nPreloaded Syringe:\nAdult: 0.5 mg in 0.5 mL.\nPediatric: 0.15 mg in 0.15 mL." },
        { question: "What is the dosage of Epinephrine for patients 5 years of age or greater?", answer: "Adult: 0.5 mg in 0.5 mL IM in the lateral thigh." },
        { question: "What is the dosage of Epinephrine for patients less than 5 years of age?", answer: "Pediatric: 0.15 mg in 0.15 mL IM in the lateral thigh." },
        { question: "Can additional doses of Epinephrine be administered?", answer: "Yes, additional doses may be administered with medical consultation." },
        { question: "What are the indications for the Epinephrine Auto-Injector?", answer: "Moderate to severe allergic reaction with respiratory distress or mild allergic reaction with a history of life-threatening allergic reaction.\nPatients with severe asthma." },
        { question: "What are the adverse effects of the Epinephrine Auto-Injector?", answer: "Tachycardia/palpitations.\nAngina.\nHeadache.\nNausea/vomiting.\nDizziness.\nHypertension.\nNervousness/anxiety.\nTremors." },
        { question: "What precaution should be taken when using the Epinephrine Auto-Injector?", answer: "Medical consultation must be obtained before administering to asthma patients with pregnancy or cardiac history.\nMedical consultation is not required for patients with severe allergic reactions and respiratory distress." },
        { question: "What are the contraindications for the Epinephrine Auto-Injector?", answer: "There are no contraindications in the presence of anaphylaxis." },
        { question: "What are the available preparations for the Epinephrine Auto-Injector?", answer: "Adult Dose: 0.3 mg.\nPediatric Dose: 0.15 mg." },
        { question: "What is the dosage of the Epinephrine Auto-Injector for patients less than 5 years of age?", answer: "0.15 mg IM in the lateral thigh via epinephrine auto-injector." },
        { question: "What is the dosage of the Epinephrine Auto-Injector for patients 5 years of age and greater?", answer: "0.3 mg IM in the lateral thigh via epinephrine auto-injector." },
        { question: "Can additional doses of the Epinephrine Auto-Injector be administered?", answer: "Yes, additional doses may be administered with medical consultation." },
        { question: "What is the pharmacology of Naloxone?", answer: "Reverses all effects due to opioid (morphine-like) agents.\nReverses respiratory depression and all central and peripheral nervous system effects." },
        { question: "What are the pharmacokinetics of Naloxone?", answer: "Onset of action is within a few minutes with intranasal (IN) administration.\nPatients responding to Naloxone may require additional doses and transport to the hospital since most opioids last longer than Naloxone.\nHas no effect in the absence of opioids/narcotics." },
        { question: "What are the indications for Naloxone?", answer: "To reverse respiratory depression induced by an opioid/narcotic agent." },
        { question: "What is the contraindication for Naloxone?", answer: "Patients under 28 days of age." },
        { question: "What are the adverse effects of Naloxone?", answer: "Opioid withdrawal." },
        { question: "What precautions should be taken with Naloxone?", answer: "May induce opiate withdrawal in opioid-dependent patients.\nCertain drugs may require much higher doses for reversal.\nAdminister and titrate to restore respiratory effort but not to restore full consciousness.\nIntranasal Naloxone must be administered via nasal atomizer.\nNaloxone has a duration of action of 40 minutes; opioids may last longer, so transport is encouraged." },
        { question: "What is the adult dosage for Naloxone?", answer: "2 mg IN: Divide dose equally between nares to a maximum of 1 mL per nare, OR\n4 mg/0.1 mL IN in one nare." },
        { question: "What is the pediatric dosage for Naloxone?", answer: "2 mg IN: Divide dose equally between nares to a maximum of 1 mL per nare, OR\n4 mg/0.1 mL IN in one nare.\nApplicable for children aged 28 days to adult." },
        { question: "Can additional doses of Naloxone be administered?", answer: "Yes, repeat as necessary to maintain respiratory activity." },
        { question: "What should clinicians do if a patient refuses transport after BLS administration of Naloxone?", answer: "Obtain medical consultation with a base station physician." }
    ],

		illnesses: [
    { question: "Symptoms: Infection of the upper airway common between 6 months and 4 years, causes swelling beneath the glottis, and presents with a seal bark cough.", answer: "Croup" },
    { question: "Symptoms: Bacterial infection causing swelling of the epiglottis, drooling, mouth breathing, and inspiratory stridor.", answer: "Epiglottitis" },
    { question: "Symptoms: Long-term inflammatory process characterized by increased mucus production, acute narrowing of the airways, SOB, and wheezing.", answer: "Asthma" },
    { question: "Symptoms: Viral infection causing inflammation of the mucosal layer in the bronchioles, leading to wheezing and other asthma-like symptoms.", answer: "Bronchiolitis" },
    { question: "Symptoms: Infection in the lungs causing shortness of breath, chest tightness, diminished breath sounds, and cough.", answer: "Pneumonia" },
    { question: "Symptoms: Abnormal valves, vessels, or chambers of the heart leading to cyanosis and hypoxia due to inadequate pulmonary blood flow.", answer: "Congenital Heart Disease (CHD)" },
    { question: "Symptoms: Infection of the brain and spinal cord lining, causing fever, vomiting, painful movement, and a history of ear or respiratory infections.", answer: "Meningitis" },
    { question: "Symptoms: Sudden and unexpected death of an infant, with no identifiable cause after an autopsy.", answer: "Sudden Infant Death Syndrome (SIDS)" },
    { question: "Symptoms: Numbness, tingling, pain, swelling, and weakness caused by damage to motor, sensory, or autonomic nerve tracts, often associated with diabetes.", answer: "Neuropathy" },
    { question: "Symptoms: Backup of blood in the heart causing jugular vein distention (JVD), extremity edema, and shortness of breath.", answer: "Congestive Heart Failure (CHF)" },
    { question: "Symptoms: Fluid buildup in the lungs causing respiratory distress, orthopnea, AMS, coughing, and pink-tinged sputum.", answer: "Pulmonary Edema" },
    { question: "Symptoms: A blood clot in the pulmonary arteries causing sudden onset dyspnea, localized chest pain, and possible syncope.", answer: "Pulmonary Embolism" },
    { question: "Symptoms: Extremely high blood sugar levels (BGL) without ketones, leading to dehydration and AMS, common in Type II diabetes.", answer: "Hyperosmolar Hyperglycemic Nonketotic Syndrome (HHNS)" },
    { question: "Symptoms: Severe systemic allergic reaction causing airway swelling, bronchoconstriction, vessel dilation, and mucus production.", answer: "Anaphylaxis" },
    { question: "Symptoms: Progressive decline in cognitive abilities, including memory and reasoning, associated with aging or neurological conditions.", answer: "Dementia" },
    { question: "Symptoms: Chronic bronchitis or emphysema leading to persistent SOB and damaged alveoli, often treated with oxygen.", answer: "Chronic Obstructive Pulmonary Disease (COPD)" },
    { question: "Symptoms: Collapsed lung from coughing, presenting with unilateral chest rise and absent lung sounds on one side.", answer: "Spontaneous Pneumothorax" },
    { question: "Symptoms: Sudden, overwhelming anxiety causing hyperventilation, often treated by calming the patient.", answer: "Hyperventilation Syndrome" },
    { question: "Symptoms: Hereditary condition causing thick mucus production, leading to frequent lung infections and digestive issues.", answer: "Cystic Fibrosis" },
    { question: "Symptoms: Chest pain due to physical exertion, usually relieved by rest or nitroglycerin.", answer: "Stable Angina" },
    { question: "Symptoms: Sudden chest pain at rest that is not relieved by nitroglycerin and may indicate an impending heart attack.", answer: "Unstable Angina" },
    { question: "Symptoms: Severe abdominal or back pain, unequal blood pressure in the arms, and a tearing sensation due to arterial rupture.", answer: "Aortic Dissection" },
    { question: "Symptoms: Rupture of an artery within or around the brain, causing headache, nausea, AMS, and neurological deficits.", answer: "Hemorrhagic Stroke" },
    { question: "Symptoms: Neurological signs that mimic a stroke but resolve within 24 hours without permanent damage.", answer: "Transient Ischemic Attack (TIA)" },
    { question: "Symptoms: Inflammation of the stomach and intestines causing nausea, vomiting, diarrhea, and abdominal pain.", answer: "Gastroenteritis" },
    { question: "Symptoms: Protrusion of abdominal organs through a weakness in the abdominal wall, potentially causing pain or obstruction.", answer: "Hernia" },
    { question: "Symptoms: Abnormally shaped red blood cells causing anemia, pain, and poor oxygen delivery to tissues.", answer: "Sickle Cell Anemia" },
    { question: "Symptoms: Severe uterine cramping and pain during menstruation, often due to hormonal imbalances.", answer: "Dysmenorrhea" },
    { question: "Symptoms: Low blood volume caused by bleeding, dehydration, or burns leading to shock.", answer: "Hypovolemic Shock" },
    { question: "Symptoms: Results from bacterial toxins in the blood causing vasodilation, capillary leakage, and hypotension.", answer: "Septic Shock" },
    { question: "Symptoms: Massive systemic vasodilation caused by an allergic reaction, leading to severe swelling and hypotension.", answer: "Anaphylactic Shock" },
    { question: "Symptoms: Compression of the heart chambers due to blood collecting in the pericardial sac, leading to decreased preload.", answer: "Pericardial Tamponade" },
    { question: "Symptoms: Air trapped in the pleural space causing mediastinal shift, respiratory distress, and hypotension.", answer: "Tension Pneumothorax" },
    { question: "Symptoms: Weakness, nausea, and severe abdominal or pelvic pain due to a fertilized egg implanting outside the uterus.", answer: "Ectopic Pregnancy" },
    { question: "Symptoms: Placenta separates prematurely from the uterine wall, causing bleeding and severe abdominal pain.", answer: "Abruptio Placentae" },
    { question: "Symptoms: Placenta covers the cervix, causing painless vaginal bleeding in the third trimester.", answer: "Placenta Previa" },
    { question: "Symptoms: Sudden onset of altered mental status, seizures, or coma due to pregnancy complications and hypertension.", answer: "Eclampsia" },
    { question: "Symptoms: Fetus compresses the inferior vena cava when the mother is lying supine, causing hypotension.", answer: "Supine Hypotensive Syndrome" },
    { question: "Symptoms: Umbilical cord presents before the fetus, cutting off oxygen supply.", answer: "Prolapsed Cord" },
    { question: "Symptoms: Fetal buttocks or feet present first during delivery, increasing the risk of complications.", answer: "Breech Birth" },
    { question: "Symptoms: Umbilical cord wrapped around the neonate's neck, requiring immediate management.", answer: "Nuchal Cord" },
    { question: "Symptoms: Temporary loss of oxygen and blood flow to the brain, leading to a sudden loss of consciousness.", answer: "Syncope" },
    { question: "Symptoms: Severe postpartum blood loss exceeding 500 mL after delivery.", answer: "Postpartum Hemorrhage" },
    { question: "Symptoms: Whooping cough caused by a bacterial infection, often accompanied by severe coughing fits.", answer: "Pertussis" },
    { question: "Symptoms: Severe cramping pain caused by irritation of the peritoneum during ovulation.", answer: "Mittelschmerz" },
    { question: "Symptoms: Inflammation of the female reproductive tract caused by infection, leading to fever, pain, and abnormal discharge.", answer: "Pelvic Inflammatory Disease (PID)" },
    { question: "Symptoms: Crystals forming in the kidneys causing severe flank pain that radiates to the groin.", answer: "Renal Calculi (Kidney Stones)" },
    { question: "Symptoms: Wounds or sores in the stomach or intestine causing burning abdominal pain, often relieved by eating or antacids.", answer: "Ulcers" },
    { question: "Symptoms: Red blood cell disorder causing extreme fatigue, pale skin, and shortness of breath.", answer: "Anemia" },
    { question: "Symptoms: Genetic blood disorder where clotting factors are missing, causing excessive bleeding.", answer: "Hemophilia" },
    { question: "Symptoms: Sudden chest pain radiating to the back or shoulders due to aortic wall dilation or rupture.", answer: "Aortic Aneurysm" },
    { question: "Symptoms: Difficulty breathing, productive cough, fever, and chest pain due to lung infection.", answer: "Pneumonia" },
    { question: "Symptoms: Sudden and temporary loss of oxygen to the brain causing fainting, but resolving without permanent damage.", answer: "Transient Ischemic Attack (TIA)" }
],






    };

    // Modal and Flashcard Elements
    const modal = document.getElementById('flashcard-modal');
    const modalClose = modal.querySelector('.close-btn');
    const flashcardElement = modal.querySelector('.flashcard');
    const flashcardFront = modal.querySelector('.front p');
    const flashcardBack = modal.querySelector('.back p');
    const prevCardBtn = document.getElementById('prev-card');
    const nextCardBtn = document.getElementById('next-card');
    const shuffleBtn = document.getElementById('shuffle-deck'); // Define shuffle button

    let currentDeck = [];
    let currentCardIndex = 0;
    let isFlipped = false;

    // Open Modal and Load Deck
    const viewDeckButtons = document.querySelectorAll('.view-deck-btn');
    viewDeckButtons.forEach(button => {
        button.addEventListener('click', () => {
            const deckName = button.getAttribute('data-deck');
            currentDeck = flashcardData[deckName];
            currentCardIndex = 0;
            isFlipped = false;
            loadCard();
            modal.classList.remove('hidden');
        });
    });

    // Close Modal
    modalClose.addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    // Load Flashcard Content
    const loadCard = () => {
        if (!currentDeck || currentDeck.length === 0) return;
        const card = currentDeck[currentCardIndex];
        flashcardFront.textContent = card.question;
        flashcardBack.textContent = card.answer;
        isFlipped = false;
        flashcardElement.classList.remove('flipped');
    };

    // Flip Flashcard
    flashcardElement.addEventListener('click', () => {
        isFlipped = !isFlipped;
        flashcardElement.classList.toggle('flipped', isFlipped);
    });

    // Navigate to Previous Card
    prevCardBtn.addEventListener('click', () => {
        if (!currentDeck || currentDeck.length === 0) return;
        currentCardIndex = (currentCardIndex - 1 + currentDeck.length) % currentDeck.length;
        loadCard();
    });

    // Navigate to Next Card
    nextCardBtn.addEventListener('click', () => {
        if (!currentDeck || currentDeck.length === 0) return;
        currentCardIndex = (currentCardIndex + 1) % currentDeck.length;
        loadCard();
    });

    // Shuffle Flashcard Deck
    const shuffleDeck = () => {
        if (!currentDeck || currentDeck.length === 0) return;
        currentDeck = currentDeck.sort(() => Math.random() - 0.5);
        currentCardIndex = 0; // Reset to the first card in the shuffled deck
        loadCard(); // Load the first card
    };

    // Add event listener for Shuffle button
    shuffleBtn.addEventListener('click', shuffleDeck);
});