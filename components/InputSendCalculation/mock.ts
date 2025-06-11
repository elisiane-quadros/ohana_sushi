import { DeliveryCost } from '@/interfaces/DeliveryCost';

const deliveryCostList: DeliveryCost[] = [
  {
    id: 1,
    name: 'Restinga',
    deliveryCost: 5,
  },
  {
    id: 2,
    name: 'Pitinga',
    deliveryCost: 7,
  },
  {
    id: 3,
    name: 'Pinheiro',
    deliveryCost: 18,
  },
  {
    id: 4,
    name: 'Hípica',
    deliveryCost: 7,
  },
  {
    id: 5,
    name: 'Aberta dos Morros',
    deliveryCost: 10,
  },
  {
    id: 6,
    name: 'Lageado',
    deliveryCost: 10,
  },
  {
    id: 7,
    name: 'Lami',
    deliveryCost: 18,
  },
  {
    id: 8,
    name: 'Belém Novo',
    deliveryCost: 12,
  },
  {
    id: 9,
    name: 'Chapéu do Sol',
    deliveryCost: 10,
  },
  {
    id: 10,
    name: 'Serraria',
    deliveryCost: 15,
  },
  {
    id: 11,
    name: 'Ponta Grossa',
    deliveryCost: 12,
  },
  {
    id: 12,
    name: 'Ipanema',
    deliveryCost: 15,
  },
  {
    id: 13,
    name: 'Guarujá',
    deliveryCost: 15,
  },
  {
    id: 14,
    name: 'Cavalhada',
    deliveryCost: 20,
  },
  {
    id: 15,
    name: 'Vila Nova',
    deliveryCost: 14,
  },
  {
    id: 16,
    name: 'Campo Novo',
    deliveryCost: 12,
  },
  {
    id: 17,
    name: 'Cohab',
    deliveryCost: 15,
  },
  {
    id: 18,
    name: 'Monte Cristo',
    deliveryCost: 15,
  },
  {
    id: 19,
    name: 'Tristeza',
    deliveryCost: 20,
  },
  {
    id: 20,
    name: 'Nonoai',
    deliveryCost: 20,
  },
  {
    id: 21,
    name: 'Cristal',
    deliveryCost: 22,
  },
  {
    id: 22,
    name: 'Costa Gama',
    deliveryCost: 8,
  },
  {
    id: 23,
    name: 'Belém Velho',
    deliveryCost: 12,
  },
  {
    id: 24,
    name: 'Glória',
    deliveryCost: 18,
  },
  {
    id: 25,
    name: 'Santa Tereza',
    deliveryCost: 25,
  },
  {
    id: 26,
    name: 'Camaquã',
    deliveryCost: 20,
  },
];

const sortedDeliveryCostList = [...deliveryCostList].sort((a, b) =>
  a.name.localeCompare(b.name),
);

export default sortedDeliveryCostList;
