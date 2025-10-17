import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    // Teste simples de conexão
    await prisma.$connect();

    // Contar produtos existentes
    const count = await prisma.product.count();

    return NextResponse.json({
      status: 'connected',
      message: 'Database connection successful',
      productCount: count,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Database connection error:', error);
    return NextResponse.json(
      {
        status: 'error',
        message: 'Database connection failed',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 },
    );
  } finally {
    await prisma.$disconnect();
  }
}
