<?php
declare(strict_types=1);

// Freetestapi SDK exists test

require_once __DIR__ . '/../freetestapi_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = FreetestapiSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
