
// DO NOT EDIT THIS FILE - it is machine generated -*- c++ -*-

#ifndef __gnu_java_lang_reflect_GenericSignatureParser__
#define __gnu_java_lang_reflect_GenericSignatureParser__

#pragma interface

#include <java/lang/Object.h>
#include <gcj/array.h>

extern "Java"
{
  namespace gnu
  {
    namespace java
    {
      namespace lang
      {
        namespace reflect
        {
            class GenericSignatureParser;
        }
      }
    }
  }
}

class gnu::java::lang::reflect::GenericSignatureParser : public ::java::lang::Object
{

public: // actually package-private
  GenericSignatureParser(::java::lang::reflect::GenericDeclaration *, ::java::lang::ClassLoader *, ::java::lang::String *);
  virtual JArray< ::java::lang::reflect::TypeVariable * > * readFormalTypeParameters();
private:
  ::java::lang::reflect::TypeVariable * readFormalTypeParameter();
public: // actually package-private
  virtual ::java::lang::reflect::Type * readFieldTypeSignature();
  virtual ::java::lang::reflect::Type * readClassTypeSignature();
private:
  JArray< ::java::lang::reflect::Type * > * readTypeArguments();
  ::java::lang::reflect::Type * readTypeArgument();
public: // actually package-private
  virtual ::java::lang::reflect::Type * readArrayTypeSignature();
  virtual ::java::lang::reflect::Type * readTypeVariableSignature();
private:
  ::java::lang::String * readIdentifier();
public: // actually package-private
  virtual jchar peekChar();
  virtual jchar readChar();
  virtual void consume(jchar);
  virtual void end();
private:
  ::java::lang::ClassLoader * __attribute__((aligned(__alignof__( ::java::lang::Object)))) loader;
  ::java::lang::reflect::GenericDeclaration * container;
  ::java::lang::String * signature;
  jint pos;
public:
  static ::java::lang::Class class$;
};

#endif // __gnu_java_lang_reflect_GenericSignatureParser__
