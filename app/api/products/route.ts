import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const type = searchParams.get('type')

    const products = await prisma.product.findMany({
      where: type && type !== 'ALL' ? { type: type as any } : {},
      include: {
        ingredients: true,
      },
      orderBy: {
        order: 'asc',
      },
    })

    return NextResponse.json(products)
  } catch (error) {
    console.error('Error fetching products:', error)
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { title, image, price, type, order, ingredients } = body

    const product = await prisma.product.create({
      data: {
        title,
        image,
        price,
        type,
        order,
        ingredients: {
          create: ingredients.map((ingredient: any) => ({
            name: ingredient.name,
            quantity: ingredient.quantity,
          })),
        },
      },
      include: {
        ingredients: true,
      },
    })

    return NextResponse.json(product, { status: 201 })
  } catch (error) {
    console.error('Error creating product:', error)
    return NextResponse.json(
      { error: 'Failed to create product' },
      { status: 500 }
    )
  }
}