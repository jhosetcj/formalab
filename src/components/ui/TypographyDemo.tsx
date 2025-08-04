'use client';

import {
  Heading,
  Subheading,
  Title,
  TextXS,
  TextSM,
  TextBase,
  TextLG,
  TextXL,
  Text2XL,
  Text3XL,
  Text4XL,
  Caption,
  Label,
  Body,
  Mono,
  Typography
} from './Typography';

export default function TypographyDemo() {
  return (
    <div className="p-8 space-y-8 bg-formalab-white dark:bg-formalab-white-dark">
      {/* Títulos */}
      <section className="space-y-4">
        <Heading>Heading - Título Principal</Heading>
        <Subheading>Subheading - Subtítulo</Subheading>
        <Title>Title - Título de Sección</Title>
      </section>

      {/* Tamaños de texto */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold mb-4">Tamaños de Texto</h3>
        <div className="space-y-2">
          <Text4XL>Text4XL - Texto Extra Grande (36px)</Text4XL>
          <Text3XL>Text3XL - Texto Muy Grande (30px)</Text3XL>
          <Text2XL>Text2XL - Texto Grande (24px)</Text2XL>
          <TextXL>TextXL - Texto Extra Largo (20px)</TextXL>
          <TextLG>TextLG - Texto Largo (18px)</TextLG>
          <TextBase>TextBase - Texto Base (16px)</TextBase>
          <TextSM>TextSM - Texto Pequeño (14px)</TextSM>
          <TextXS>TextXS - Texto Extra Pequeño (12px)</TextXS>
        </div>
      </section>

      {/* Componentes especializados */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold mb-4">Componentes Especializados</h3>
        <div className="space-y-2">
          <Body>Body - Texto del cuerpo principal</Body>
          <Label>Label - Etiqueta de formulario</Label>
          <Caption>Caption - Texto de descripción pequeña</Caption>
          <Mono>Mono - Texto monoespaciado para código</Mono>
        </div>
      </section>

      {/* Variantes flexibles */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold mb-4">Variantes Flexibles</h3>
        <div className="space-y-2">
          <Typography variant="heading" as="h1">
            Typography con variant="heading"
          </Typography>
          <Typography variant="subtitle" as="h2">
            Typography con variant="subtitle"
          </Typography>
          <Typography variant="title" as="h3">
            Typography con variant="title"
          </Typography>
          <Typography variant="body">
            Typography con variant="body"
          </Typography>
          <Typography variant="caption">
            Typography con variant="caption"
          </Typography>
          <Typography variant="mono">
            Typography con variant="mono"
          </Typography>
        </div>
      </section>

      {/* Ejemplos de uso */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold mb-4">Ejemplos de Uso</h3>
        <div className="space-y-4 p-6 border border-formalab-grey-1.5 dark:border-formalab-grey-1.5-dark rounded-lg">
          <div>
            <Label>Nombre del Campo</Label>
            <input 
              type="text" 
              placeholder="Escribe aquí..." 
              className="w-full mt-1 px-3 py-2 border border-formalab-grey-1.5 dark:border-formalab-grey-1.5-dark rounded-lg bg-formalab-white dark:bg-formalab-white-dark"
            />
            <Caption>Este es un texto de ayuda para el campo</Caption>
          </div>
          
          <div>
            <Title>Configuración del Proyecto</Title>
            <Body className="text-formalab-grey-2 dark:text-formalab-grey-2-dark">
              Aquí puedes configurar los parámetros básicos de tu proyecto de diseño paramétrico.
            </Body>
          </div>
          
          <div>
            <Label>Código de Ejemplo:</Label>
            <Mono className="block mt-1 p-3 bg-formalab-grey-1 dark:bg-formalab-grey-1-dark rounded-lg">
              function createPattern() {'{'}
                return "Hello Formalab!";
              {'}'}
            </Mono>
          </div>
        </div>
      </section>
    </div>
  );
} 