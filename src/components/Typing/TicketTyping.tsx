export type Ticket = {
  id: string;
  time: string;
  passengerName: string;
  passengerSSN: number;
  from: string;
  to: string;
  price: number;
};

export type TicketCreated = Omit<Ticket, "id">;
