;
; hello.ftdi.blink.44.asm
;
; Simple Blink in ASM
; Fiore Basile - FabAcademy 2014
; Public Domain


.include "tn44def.inc"

.equ led_pin = PA7; led pin is PA7
.equ led_port = PORTA; comm port
.equ led_dir = DDRA; comm direction
.equ led_pins = PINA; comm pins
.def bitcnt = R16; bit counter
.def temp = R17; temporary storage
.def temp1 = R18; temporary storage
.def counter1 = R20;
.def counter2 = R22;
 

; program is in lower part of memory
.cseg
.org 0
rjmp reset 


;
; main program
;
reset:
   ;
   ; set fuse low byte to 0x7E for 20 MHz resonator
   ;
   ; set clock divider to /1
   ;
   ldi temp, (1 << CLKPCE)
   ldi temp1, (0 << CLKPS3) | (0 << CLKPS2) | (0 << CLKPS1) | (0 << CLKPS0)
   out CLKPR, temp
   out CLKPR, temp1

   ;
   ; set stack pointer to top of RAM
   ;
   ldi temp, high(RAMEND)
   out SPH, temp
   ldi temp, low(RAMEND)
   out SPL, temp


   ; set pin to output
   sbi led_port, led_pin
   sbi led_dir, led_pin

   ;
   ; start main loop
   ;
   loop:
       sbi led_pins, led_pin ; toggle led pin
       rcall counta
       rjmp loop


   counta: ldi counter1,0
   pausea: rcall counta
           dec counter1
           brne pausea
           ret
           
   countb: ldi counter2,0
   pauseb: dec counter2
           brne pauseb
           ret
           
           
       