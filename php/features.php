<?php
declare(strict_types=1);

// Freetestapi SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class FreetestapiFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new FreetestapiBaseFeature();
            case "test":
                return new FreetestapiTestFeature();
            default:
                return new FreetestapiBaseFeature();
        }
    }
}
