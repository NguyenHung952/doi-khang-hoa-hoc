const reactions = {
     // 🔥 Phản ứng hóa hợp
    "H + O": "2H₂ + O₂ → 2H₂O",
    "Na + Cl": "2Na + Cl₂ → 2NaCl",
    "Fe + O": "4Fe + 3O₂ → 2Fe₂O₃",
    "C + O": "C + O₂ → CO₂",
    "H + Cl": "H₂ + Cl₂ → 2HCl",
    "Mg + O": "2Mg + O₂ → 2MgO",
    "Zn + S": "Zn + S → ZnS",
    "Ca + O": "2Ca + O₂ → 2CaO",
    "K + Br": "2K + Br₂ → 2KBr",
    "Al + O": "4Al + 3O₂ → 2Al₂O₃",

    // 🔥 Phản ứng phân hủy
    "H₂O₂": "2H₂O₂ → 2H₂O + O₂",
    "CaCO₃": "CaCO₃ → CaO + CO₂",
    "KClO₃": "2KClO₃ → 2KCl + 3O₂",
    "Cu(OH)₂": "Cu(OH)₂ → CuO + H₂O",
    "Fe(OH)₃": "2Fe(OH)₃ → Fe₂O₃ + 3H₂O",
    "NaHCO₃": "2NaHCO₃ → Na₂CO₃ + CO₂ + H₂O",

    // 🔥 Phản ứng thế
    "Zn + HCl": "Zn + 2HCl → ZnCl₂ + H₂",
    "Fe + CuSO₄": "Fe + CuSO₄ → FeSO₄ + Cu",
    "Al + HCl": "2Al + 6HCl → 2AlCl₃ + 3H₂",
    "Mg + H₂SO₄": "Mg + H₂SO₄ → MgSO₄ + H₂",
    "Na + H₂O": "2Na + 2H₂O → 2NaOH + H₂",

    // 🔥 Phản ứng trao đổi
    "NaOH + HCl": "NaOH + HCl → NaCl + H₂O",
    "AgNO₃ + NaCl": "AgNO₃ + NaCl → AgCl↓ + NaNO₃",
    "H₂SO₄ + BaCl₂": "H₂SO₄ + BaCl₂ → BaSO₄↓ + 2HCl",
    "KOH + H₂SO₄": "KOH + H₂SO₄ → K₂SO₄ + H₂O",
    "HCl + Na₂CO₃": "2HCl + Na₂CO₃ → 2NaCl + CO₂ + H₂O",

    // 🔥 Phản ứng cháy (hydrocacbon)
    "CH₄ + O": "CH₄ + 2O₂ → CO₂ + 2H₂O",
    "C₂H₆ + O": "2C₂H₆ + 7O₂ → 4CO₂ + 6H₂O",
    "C₃H₈ + O": "C₃H₈ + 5O₂ → 3CO₂ + 4H₂O",
    "C₄H₁₀ + O": "2C₄H₁₀ + 13O₂ → 8CO₂ + 10H₂O",
    "C₂H₅OH + O": "C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O",

    // 🔥 Phản ứng oxi hóa - khử
    "Fe₂O₃ + C": "Fe₂O₃ + 3C → 2Fe + 3CO",
    "CuO + H₂": "CuO + H₂ → Cu + H₂O",
    "MnO₂ + HCl": "MnO₂ + 4HCl → MnCl₂ + Cl₂ + 2H₂O",
    "ZnO + C": "ZnO + C → Zn + CO",
    "Fe₂O₃ + CO": "Fe₂O₃ + 3CO → 2Fe + 3CO₂",

    // 🔥 Phản ứng hữu cơ
    "C₂H₂ + H₂": "C₂H₂ + H₂ → C₂H₄",
    "C₆H₆ + Br₂": "C₆H₆ + Br₂ → C₆H₆Br₂",
    "C₂H₅OH + Na": "C₂H₅OH + Na → C₂H₅ONa + H₂",
    "C₆H₁₂O₆ → lên men": "C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂",

    // 🔥 Phản ứng nhiệt phân
    "Na₂CO₃": "Na₂CO₃ → Na₂O + CO₂",
    "K₂Cr₂O₇": "K₂Cr₂O₇ → K₂CrO₄ + Cr₂O₃ + O₂",
    "Al₂O₃ + điện phân": "Al₂O₃ → 2Al + 3O₂",
    "NaCl + điện phân": "2NaCl → 2Na + Cl₂",
    "H₂O + điện phân": "2H₂O → 2H₂ + O₂",

    // 🔥 Phản ứng đặc biệt
    "NH₄OH": "NH₄OH → NH₃ + H₂O",
    "H₂SO₄ + Fe": "H₂SO₄ + Fe → FeSO₄ + H₂",
    "HNO₃ + Cu": "HNO₃ + Cu → Cu(NO₃)₂ + NO₂ + H₂O",
    "Al + NaOH": "2Al + 2NaOH + 6H₂O → 2Na[Al(OH)₄] + 3H₂",
    "Fe + Cl₂": "2Fe + 3Cl₂ → 2FeCl₃",
};
