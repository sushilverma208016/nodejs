
// DO NOT EDIT THIS FILE - it is machine generated -*- c++ -*-

#ifndef __gnu_javax_net_ssl_provider_UnresolvedExtensionValue__
#define __gnu_javax_net_ssl_provider_UnresolvedExtensionValue__

#pragma interface

#include <gnu/javax/net/ssl/provider/Extension$Value.h>
extern "Java"
{
  namespace gnu
  {
    namespace javax
    {
      namespace net
      {
        namespace ssl
        {
          namespace provider
          {
              class UnresolvedExtensionValue;
          }
        }
      }
    }
  }
  namespace java
  {
    namespace nio
    {
        class ByteBuffer;
    }
  }
}

class gnu::javax::net::ssl::provider::UnresolvedExtensionValue : public ::gnu::javax::net::ssl::provider::Extension$Value
{

public:
  UnresolvedExtensionValue(::java::nio::ByteBuffer *);
  virtual jint length();
  virtual ::java::nio::ByteBuffer * buffer();
  virtual ::java::nio::ByteBuffer * value();
  virtual ::java::lang::String * toString();
  virtual ::java::lang::String * toString(::java::lang::String *);
private:
  ::java::nio::ByteBuffer * __attribute__((aligned(__alignof__( ::gnu::javax::net::ssl::provider::Extension$Value)))) buffer__;
public:
  static ::java::lang::Class class$;
};

#endif // __gnu_javax_net_ssl_provider_UnresolvedExtensionValue__
