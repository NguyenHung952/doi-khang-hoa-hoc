const reactions = {
    // Phản ứng hóa hợp
    "H₂ + O₂": "H₂O",
    "C + O₂": "CO₂",
    "S + O₂": "SO₂",
    "N₂ + O₂": "NO₂",
    "Fe + S": "FeS",
    "CaO + H₂O": "Ca(OH)₂",
    "CO₂ + H₂O": "H₂CO₃",

    // Phản ứng phân hủy
    "CaCO₃": "CaO + CO₂",
    "H₂O₂": "H₂O + O₂",
    "KClO₃": "KCl + O₂",
    "H₂SO₄ đặc": "SO₃ + H₂O",
    "NH₄NO₃": "N₂O + H₂O",

    // Phản ứng thế
    "Zn + HCl": "ZnCl₂ + H₂",
    "Cu + AgNO₃": "Cu(NO₃)₂ + Ag",
    "Al + HCl": "AlCl₃ + H₂",
    "Fe + CuSO₄": "FeSO₄ + Cu",
    "Mg + H₂SO₄": "MgSO₄ + H₂",
    "Na + H₂O": "NaOH + H₂",
    "Ca + H₂O": "Ca(OH)₂ + H₂",

    // Phản ứng trao đổi
    "NaOH + HCl": "NaCl + H₂O",
    "KOH + HCl": "KCl + H₂O",
    "H₂SO₄ + BaCl₂": "BaSO₄↓ + HCl",
    "AgNO₃ + NaCl": "AgCl↓ + NaNO₃",
    "Ca(OH)₂ + CO₂": "CaCO₃↓ + H₂O",
    "HCl + Na₂CO₃": "NaCl + CO₂ + H₂O",
    "H₂SO₄ + Na₂CO₃": "Na₂SO₄ + CO₂ + H₂O",

    // Phản ứng cháy (hydrocacbon)
    "CH₄ + O₂": "CO₂ + H₂O",
    "C₂H₆ + O₂": "CO₂ + H₂O",
    "C₃H₈ + O₂": "CO₂ + H₂O",
    "C₄H₁₀ + O₂": "CO₂ + H₂O",
    "C₂H₅OH + O₂": "CO₂ + H₂O",

    // Phản ứng khử - oxi hóa
    "Fe₂O₃ + C": "Fe + CO₂",
    "CuO + H₂": "Cu + H₂O",
    "ZnO + C": "Zn + CO₂",
    "MnO₂ + HCl": "MnCl₂ + Cl₂ + H₂O",
    "Fe₂O₃ + CO": "Fe + CO₂",

    // Phản ứng đặc biệt
    "NH₄OH": "NH₃ + H₂O",
    "H₂SO₄ + Fe": "FeSO₄ + H₂",
    "HNO₃ + Cu": "Cu(NO₃)₂ + NO₂ + H₂O",
    "Al + NaOH": "NaAlO₂ + H₂",
    "Fe + Cl₂": "FeCl₃",
    "SO₂ + H₂O": "H₂SO₃",
    "CO₂ + Ca(OH)₂": "CaCO₃↓ + H₂O",

    // Phản ứng hữu cơ
    "C₂H₄ + H₂": "C₂H₆",
    "C₂H₂ + H₂": "C₂H₄",
    "C₆H₆ + Br₂": "C₆H₆Br₂",
    "C₂H₅OH + Na": "C₂H₅ONa + H₂",
    "C₆H₁₂O₆ → lên men": "C₂H₅OH + CO₂",

    // Phản ứng tổng hợp khác
    "Na₂O + H₂O": "NaOH",
    "SO₃ + H₂O": "H₂SO₄",
    "N₂ + 3H₂": "2NH₃",
    "2CO + O₂": "2CO₂",
    "Ca + Cl₂": "CaCl₂",
    "Al + O₂": "Al₂O₃",
    "Zn + S": "ZnS",
    "Pb + O₂": "PbO₂",

    // Phản ứng nhiệt phân
    "Cu(OH)₂": "CuO + H₂O",
    "Fe(OH)₃": "Fe₂O₃ + H₂O",
    "Ca(OH)₂": "CaO + H₂O",
    "NaHCO₃": "Na₂CO₃ + CO₂ + H₂O",
    "K₂Cr₂O₇": "K₂CrO₄ + Cr₂O₃ + O₂",

    // Phản ứng điện phân
    "NaCl + điện phân": "Na + Cl₂",
    "H₂O + điện phân": "H₂ + O₂",
    "CuCl₂ + điện phân": "Cu + Cl₂",
    "Al₂O₃ + điện phân": "Al + O₂",
    "ZnCl₂ + điện phân": "Zn + Cl₂"
};
