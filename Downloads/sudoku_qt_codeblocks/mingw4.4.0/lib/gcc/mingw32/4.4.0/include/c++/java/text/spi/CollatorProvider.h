
// DO NOT EDIT THIS FILE - it is machine generated -*- c++ -*-

#ifndef __java_text_spi_CollatorProvider__
#define __java_text_spi_CollatorProvider__

#pragma interface

#include <java/util/spi/LocaleServiceProvider.h>
extern "Java"
{
  namespace java
  {
    namespace text
    {
        class Collator;
      namespace spi
      {
          class CollatorProvider;
      }
    }
  }
}

class java::text::spi::CollatorProvider : public ::java::util::spi::LocaleServiceProvider
{

public: // actually protected
  CollatorProvider();
public:
  virtual ::java::text::Collator * getInstance(::java::util::Locale *) = 0;
  static ::java::lang::Class class$;
};

#endif // __java_text_spi_CollatorProvider__
