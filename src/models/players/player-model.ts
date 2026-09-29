
/**
 * Faixa de atributos válida no EA FC (1 a 99).
 */
export type StatRating = number;

/**
 * Interface representando o modelo de dados completo de uma carta.
 */
export interface playerModel {

  id:number;
  /** Overall Rating (Classificação geral do jogador: 1-99) */
  ovr: StatRating;

  /** Nome de exibição na carta */
  name: string;

  /** País / Nacionalidade do jogador */
  nationality: string;

  /** Clube atual ou 'legends' para Ícones / Legends */
  club: "legends" | string;

  /** Pace (Ritmo / Velocidade: 1-99) */
  pac: StatRating;

  /** Shooting (Finalização: 1-99) */
  sho: StatRating;

  /** Passing (Passe: 1-99) */
  pas: StatRating;

  /** Dribbling (Drible: 1-99) */
  dri: StatRating;

  /** Defending (Defesa: 1-99) */
  def: StatRating;

  /** Physicality (Físico: 1-99) */
  phy: StatRating;
}

