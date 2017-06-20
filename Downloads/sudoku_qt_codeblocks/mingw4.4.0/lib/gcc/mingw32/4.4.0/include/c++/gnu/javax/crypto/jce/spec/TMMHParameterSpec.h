
// DO NOT EDIT THIS FILE - it is machine generated -*- c++ -*-

#ifndef __gnu_javax_crypto_jce_spec_TMMHParameterSpec__
#define __gnu_javax_crypto_jce_spec_TMMHParameterSpec__

#pragma interface

#include <java/lang/Object.h>
#include <gcj/array.h>

extern "Java"
{
  namespace gnu
  {
    namespace java
    {
      namespace security
      {
        namespace prng
        {
            class IRandom;
        }
      }
    }
    namespace javax
    {
      namespace crypto
      {
        namespace jce
        {
          namespace spec
          {
              class TMMHParameterSpec;
          }
        }
      }
    }
  }
}

class gnu::javax::crypto::jce::spec::TMMHParameterSpec : public ::java::lang::Object
{

public:
  TMMHParameterSpec(::gnu::java::security::prng::IRandom *, ::java::lang::Integer *, JArray< jbyte > *);
  TMMHParameterSpec(::gnu::java::security::prng::IRandom *, ::java::lang::Integer *);
  virtual ::gnu::java::security::prng::IRandom * getKeystream();
  virtual ::java::lang::Integer * getTagLength();
  virtual JArray< jbyte > * getPrefix();
public: // actually protected
  ::gnu::java::security::prng::IRandom * __attribute__((aligned(__alignof__( ::java::lang::Object)))) keystream;
  ::java::lang::Integer * tagLength;
  JArray< jbyte > * prefix;
public:
  static ::java::lang::Class class$;
};

#endif // __gnu_javax_crypto_jce_spec_TMMHParameterSpec__
